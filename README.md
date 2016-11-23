coap-webapp-boilerplate
=================

## Getting Started

```shell
$ git clone https://github.com/PeterEB/coap-webapp-boilerplate.git
$ cd coap-webapp-boilerplate
/coap-webapp-boilerplate $ npm install
/coap-webapp-boilerplate $ npm start
```

## Directory Layout

```shell
.
├── /app/                            # Core framework
│   ├── /components/                 # Generic UI components
│   │   ├── /CardBlock/              # CardBlock component
│   │   ├── /NavBar/                 # NavBar component
│   │   └── /Card/                   # Card component
│   │       ├── /Card.js             # Export all of the Card components
│   │       ├── /Buzzer.js           # Buzzer Card component
│   │       ├── /Flame.js            # Flame Card component
│   │       └── /...                 # etc.
│   ├── /helpers/                    # Helper classes
│   ├── /static/                     # Static files such as favicon.ico etc.
│   ├── /styles/                     # CSS styles
│   ├── /client.js                   # React application entry point
│   ├── /index.tpl.html              # Webpack HtmlWebpackPlugin template
│   └── /server.js                   # Server side application
├── /node_modules/                   # 3rd-party libraries and utilities
├── main.js                          # Express server
├── package.json                     # The list of project dependencies and NPM scripts
├── webpack.config.js                # Webpack bundling and optimization settings for `npm start`
└── webpack.production.config.js     # Webpack bundling and optimization settings for `npm build`
```
