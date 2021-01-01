const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const settings = require('./settings');
const postgres = require('./db/postgres');

const usersRouter = require('./routes/users');
const firmsRouter = require('./routes/firms');
const seasonsRouter = require('./routes/seasons');
const rolesRouter = require('./routes/roles');
const positionsRouter = require('./routes/positions');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(async (req, res, next) => {
    if (req.headers.authorization) {
        let sqlQuery = 'SELECT id, login, password, salt FROM users';
        let users = await postgres.any(sqlQuery);
        console.log(req.headers.authorization);
        jwt.verify(req.headers.authorization.split(' ')[1], settings.TOKEN_KEY, (err, payload) => {
            if (err)
                next();
            else if (payload) {
                for (let user of users) {
                    if (user.id === payload.id) {
                        req.user = user;
                        next();
                    }
                }        
                if (!req.user) next();
            }
        });
    }
    next();
});

app.use('/users', usersRouter);
app.use('/firms', firmsRouter);
app.use('/seasons', seasonsRouter);
app.use('/roles', rolesRouter);
app.use('/positions', positionsRouter);

module.exports = app;
