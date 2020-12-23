const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users');
const firmsRouter = require('./routes/firms');
const seasonsRouter = require('./routes/seasons');
const rolesRouter = require('./routes/roles');
const positionsRouter = require('./routes/positions');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/firms', firmsRouter);
app.use('/seasons', seasonsRouter);
app.use('/roles', rolesRouter);
app.use('/positions', positionsRouter);

module.exports = app;
