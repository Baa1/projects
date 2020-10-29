//Requiring libraries
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');

//Requiring routes
var usersRouter = require('./routes/users');
var cardsRouter = require('./routes/cards');
var filesRouter = require('./routes/files');

var app = express();

//Using plugins
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({dest:"files"}).single("filedata"));

//Common option requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    //res.header("Access-Control-Allow-Origin", "http://94.73.253.155:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Using routes
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/files', filesRouter);

module.exports = app;
