var express = require('express');
//var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');


var app = express();
app.use(cors());

// 视图引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 读取favicon到内存
app.use(favicon(__dirname + '/public/favicon.ico'));


// logger 存入文件
//var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
//app.use(logger('dev', {stream: accessLogStream}));
app.use(logger('dev'));


// 设置body及cookie解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')));


// 路由设置
var router   = require('./routes/index'); // 前端
var api      = require('./routes/api');   // api

app.use('/',      router);
app.use('/api',   api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
});


// 手动设置env
app.set('env', 'production');

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                        message: err.message,
                        error: err
                });
        });
};


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
                message: err.message,
                error: {}
        });
});


module.exports = app;
