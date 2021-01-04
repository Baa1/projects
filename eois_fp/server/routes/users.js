const express = require('express');
const router = express.Router();
const settings = require('../settings');
const postgres = require('../db/postgres'); 
const utils = require('../utils');
const jwt = require('jsonwebtoken');
const { query } = require('../db/postgres');

router.post('/registration', (req, res) => {
    let encryptObject = utils.encrypt(req.body.password);
    let password = encryptObject.encryptedData;
    let salt = encryptObject.iv;
    let params = [
        req.body.login,
        password,
        salt,
        req.body.email,
        req.body.name,
        req.body.surname,
        req.body.patronymic,
        req.body.birthday,
        req.body.roleId
    ];
    let sqlQuery = 'INSERT INTO users (login, password, salt, email, name, surname, patronymic, birthday, role_id)' 
        + ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
    postgres.one(sqlQuery, params)
        .then(data => {
            console.log(data);
            return res.status(200).send({message: 'User created.'});
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send({message: 'Unable create user.'});
        })
});

router.post('/authorization', async (req, res) => {
    let userSqlQuery = 'SELECT id, login, salt, password FROM users WHERE login = $1';
    let data = await postgres.any(userSqlQuery, req.body.login);
    if (data && data.length > 0) {
        let credentials = {
            iv: data[0].salt,
            encryptedData: data[0].password
        };
        let password = utils.decrypt(credentials);
        if (req.body.password === password) {
            return res.status(200).send({
                id: data[0].id,
                login: data[0].login,
                token: jwt.sign({id: data[0].id}, settings.TOKEN_KEY)
            });
        }
    } else {
        return res.status(404).send({message: 'User not found'});
    }
});

router.get('/:id', async (req, res) => {
    if (req.params.id > 0) {
        let userSqlQuery = 'SELECT name, surname, patronymic, birthday FROM users WHERE id = $1';
        let data = await postgres.one(userSqlQuery, req.params.id);
        data.birthday = utils.getFormattedDate(new Date(data.birthday));
        return res.status(200).send(data);
    } else {
        return res.status(404).send({message: 'User not found'});
    }
});

module.exports = router;
