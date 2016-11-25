var http = require('http');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var _ = require('busyman');
var cserver = require('coap-shepherd');
var utils = require('./helpers/utils');

// 使用 ioServer 作為與 Web Client 溝通的介面
var ioServer = require('./helpers/ioServer');

// 溫控系統的應用程式
// [TODO]

// 建立 HTTP Server
// [TODO]

// 啟動 ioServer
// [TODO]

function serverApp () {
    // show Welcome Msg               
    showWelcomeMsg();

    // set Leave Msg
    setLeaveMsg();

    // register Req handler
    // 註冊 permitJoin 處理函式
    ioServer.regReqHdlr('permitJoin', function (args, cb) { 
        // [TODO]

    });

    // 註冊 getDevs 處理函式
    ioServer.regReqHdlr('getDevs', function (args, cb) { 
        // [TODO]

    });

    ioServer.regReqHdlr('write', function (args, cb) { 
        // [TODO]

    });

    // event listeners
    cserver.on('ready', function () {
        console.log(chalk.green('[         ready ] '));

        // 當 coap-shepherd 啟動完畢，執行燈控應用
        // [TODO]

    });

    // 監聽 permitJoining 事件，並轉發至 Client 端
    cserver.on('permitJoining', function (timeLeft) {
        console.log(chalk.green('[ permitJoining ] ') + timeLeft + ' sec');

        // [TODO]

    });

    cserver.on('error', function (err) {
        console.log(chalk.red('[         error ] ') + err.message);
        ioServer.sendInd('error', { msg: msg });
    });

    cserver.on('ind', function (msg) {
        var cnode = msg.cnode;
        
        switch (msg.type) {
            /*** devIncoming      ***/
            // 監聽 devIncoming 事件，並轉發至 Client端
            case 'devIncoming':
                console.log(chalk.yellow('[   devIncoming ] ') + '@' + cnode.clientName);

                // [TODO]

                break;

            /*** devStatus        ***/
            // 監聽 devStatus 事件，並轉發至 Client端
            case 'devStatus':
                var status = msg.data;

                if (status === 'online')
                    status = chalk.green(status);
                else 
                    status = chalk.red(status);

                console.log(chalk.magenta('[     devStatus ] ') + '@' + cnode.clientName + ', ' + status);

                // [TODO]

                break;

            /*** devNotify       ***/
            case 'devNotify':
                var pathArray = utils.pathSlashParser(msg.data.path),
                    gad = utils.getGadInfo(pathArray[0], pathArray[1], pathArray[2], msg.data.value);

                console.log(chalk.blue('[   attrsChange ] ') + '@' + cnode.clientName + ', auxId: ' + gad.auxId + ', value: ' + gad.value);
                
                // [TODO] 

                break;
        }
    });

    // 清除 coap-shepherd 資料庫中的檔案
    var dbPath = '../node_modules/coap-shepherd/lib/database/coap.db';

    dbPath = path.resolve(__dirname, dbPath);
    fs.exists(dbPath, function (isThere) {
        if (isThere) { fs.unlink(dbPath); }
    });

    // 啟動 coap-shepherd
    // [TODO]

}


/**********************************/
/* welcome function               */
/**********************************/
function showWelcomeMsg() {
    var coapPart1 = chalk.blue('   _____ ____   ___    ___          ____ __ __ ____ ___   __ __ ____ ___   ___ '),
        coapPart2 = chalk.blue('  / ___// __ \\ / _ |  / _ \\  ____  / __// // // __// _ \\ / // // __// _ \\ / _ \\'),
        coapPart3 = chalk.blue(' / /__ / /_/ // __ | / ___/ /___/ _\\ \\ / _  // _/ / ___// _  // _/ / , _// // /'),
        coapPart4 = chalk.blue(' \\___/ \\____//_/ |_|/_/          /___//_//_//___//_/   /_//_//___//_/|_|/____/ ');

    console.log('');
    console.log('');
    console.log('Welcome to coap-shepherd webapp... ');
    console.log('');
    console.log(coapPart1);
    console.log(coapPart2);
    console.log(coapPart3);
    console.log(coapPart4);
    console.log(chalk.gray('            An implementation of CoAP device management Server.'));
    console.log('');
    console.log('   >>> Author:     Peter Yi (peter.eb9@gmail.com)');
    console.log('   >>> Version:    coap-shepherd v1.0.0');
    console.log('   >>> Document:   https://github.com/PeterEB/coap-shepherd');
    console.log('   >>> Copyright (c) 2016 Peter Yi, The MIT License (MIT)');
    console.log('');
    console.log('The server is up and running, press Ctrl+C to stop server.');
    console.log('');
    console.log('---------------------------------------------------------------');
}

/**********************************/
/* goodBye function               */
/**********************************/
function setLeaveMsg() {
    process.stdin.resume();

    function showLeaveMessage() {
        console.log(' ');
        console.log(chalk.blue('      _____              __      __                  '));
        console.log(chalk.blue('     / ___/ __  ___  ___/ /____ / /  __ __ ___       '));
        console.log(chalk.blue('    / (_ // _ \\/ _ \\/ _  //___// _ \\/ // // -_)   '));
        console.log(chalk.blue('    \\___/ \\___/\\___/\\_,_/     /_.__/\\_, / \\__/ '));
        console.log(chalk.blue('                                   /___/             '));
        console.log(' ');
        console.log('    >>> This is a simple demonstration of how the shepherd works.');
        console.log('    >>> Please visit the link to know more about this project:   ');
        console.log('    >>>   ' + chalk.yellow('https://github.com/PeterEB/coap-shepherd'));
        console.log(' ');
        process.exit();
    }

    process.on('SIGINT', showLeaveMessage);
}

module.exports = serverApp;
