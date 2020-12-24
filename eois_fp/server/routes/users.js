const express = require('express');
const router = express.Router();
const settings = require('../settings');
const crypto = require('crypto');
const postgres = require('../db/postgres');

function encrypt(text) { 
    // Defininf iv 
    const iv = crypto.randomBytes(16);
    // Creating Cipheriv with its parameter 
    let cipher = crypto.createCipheriv(settings.ALGORITHM, Buffer.from(settings.KEY), iv); 
    // Updating text 
    let encrypted = cipher.update(text); 
    // Using concatenation 
    encrypted = Buffer.concat([encrypted, cipher.final()]); 
    // Returning iv and encrypted data 
    return { 
        iv: iv.toString('hex'),  
        encryptedData: encrypted.toString('hex') 
    }; 
} 

 function decrypt(text) { 
    let iv = Buffer.from(text.iv, 'hex'); 
    let encryptedText = Buffer.from(text.encryptedData, 'hex'); 
    // Creating Decipher 
    let decipher = crypto.createDecipheriv(settings.ALGORITHM, Buffer.from(settings.KEY), iv); 
    // Updating encrypted text 
    let decrypted = decipher.update(encryptedText); 
    decrypted = Buffer.concat([decrypted, decipher.final()]); 
    // returns data after decryption 
    return decrypted.toString(); 
} 

router.post('/registration', (req, res) => {
    let encryptObject = encrypt(req.body.password);
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
    req.body.birthday
    ];
    let sqlQuery = 'INSERT INTO users (login, password, salt, email, name, surname, patronymic, birthday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';
    postgres.one(sqlQuery, params)
        .then(data => {
            console.log(data);
            return res.status(200).send({message: 'User created.'});
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send({message: 'Unable create user.'});
        })
    res.send(params);
});

router.post('/authorization', (req, res) => {

});

module.exports = router;
