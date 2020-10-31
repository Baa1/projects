//Requiring libraries
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const cors = require('cors');
const session = require('express-session');

//Requiring routes
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const filesRouter = require('./routes/files');

const app = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../cards/public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

//Using plugins
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({storage:storage}).single("filedata"));
app.use(cors());
app.use(session({ secret: 'key', saveUninitialized: true}));

//Using routes
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/files', filesRouter);

module.exports = app;
