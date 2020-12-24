const express = require('express');
const router = express.Router();
const settings = require('../settings');
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

router.post('/authorization', (req, res) => {

});

module.exports = router;
