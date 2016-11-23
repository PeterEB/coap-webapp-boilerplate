'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = {
    main: path.join(__dirname, 'app', 'client.js'),         // app folder: source code
    build: path.join(__dirname, 'build'),                   // build folder: bundle code
    style: [
        path.join(__dirname, 'app', 'styles', 'main.css'),
        path.join(__dirname, 'app', 'styles', 'csshake.css')
    ]
};

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            PATHS.main
        ],
        style: PATHS.style
    },

    output: {
        path: PATHS.build,
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'global.GENTLY': false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    module: {
        loaders: [ /*{
            test: /\.js?$/,
            include: path.join(__dirname, 'app'),
            loader: 'react-hot',    // use react-hot-loader
        }, */{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                "presets": ["react", "es2015", "stage-0", "react-hmre"]
            }
        }, {
            test: /\.json?$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]',
            include: PATHS.style
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            loader: 'url-loader?limit=10000'
        }]
    },

    node: {
        __dirname: true,
        fs: 'empty'
    }
};
