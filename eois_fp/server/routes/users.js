const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres'); 
const utils = require('../utils');

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
        + ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    postgres.none(sqlQuery, params)
        .then(data => {
            console.log(data);
            return res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            return res.sendStatus(500);
        })
});

router.get('/:id', async (req, res) => {
    if (req.user && req.user.id > 0) {
        if (req.params.id > 0) {
            let sqlQuery = 'SELECT name, surname, patronymic, birthday FROM users WHERE id = $1';
            let data = await postgres.one(sqlQuery, req.params.id);
            data.birthday = utils.getFormattedDate(new Date(data.birthday));
            return res.send(data);
        } else {
            return res.sendStatus(401);
        }
    }
});

router.get('/participants', async (req, res) => {
    let sqlQuery = 'SELECT id, name, surname FROM users LEFT JOIN roles ON roles.id = users.role_id WHERE roles.name = "Куратор"';
    let data = await postgres.any(sqlQuery);
    return res.send(data);
});

module.exports = router;
