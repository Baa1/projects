require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const settings = require('./settings');
const postgres = require('./db/postgres');
const utils = require('./utils');

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

app.post('/login', async (req, res) => {
    const user = {
        login: req.body.login,
        password: req.body.password
    }
    let userSqlQuery = 'SELECT users.id as id, login, salt, password, roles.name as role FROM users LEFT JOIN roles ON roles.id = users.role_id WHERE login = $1';
    let data = await postgres.any(userSqlQuery, req.body.login);
    if (data && data.length > 0) {
        let credentials = {
            iv: data[0].salt,
            encryptedData: data[0].password
        };
        let password = utils.decrypt(credentials);
        if (req.body.password === password) {
            let payload = {
                id: data[0].id,
                login: data[0].login,
                role: data[0].role
            }
            const accessToken = generateAccessToken(payload);
            return res.json({
                accessToken: accessToken
            });
        } else {
            return res.sendStatus(403);
        }
    } else {
        return res.sendStatus(403);
    }
});

app.delete('/logout', (req, res) => {
    res.sendStatus(204);
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

//auth middlware
app.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
});

app.get('/attempt', (req, res) => {
    if (req.user) {
        return res.send(req.user);
    } else {
        return res.sendStatus(401);
    }
});

app.use('/users', usersRouter);
app.use('/firms', firmsRouter);
app.use('/seasons', seasonsRouter);
app.use('/roles', rolesRouter);
app.use('/positions', positionsRouter);

module.exports = app;
