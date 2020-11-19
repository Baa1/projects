const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const crypto = require('crypto');
/*const mongoose = require('../settings/mongo');

const Schema = mongoose.Schema;

const userScheme = new Schema({
    login: String,
    password: String,
    salt: String
}, 
{
    versionKey: false
});

const User = mongoose.model("User", userScheme);

router.post('/authorization', function(req, res) {
    User.find({login: req.body.login}, (err, response) => {
        if (err) return console.log(err);
        if (response && response.length === 1) {
            if (sha1(req.body.password + response[0].salt) === response[0].password) {
                res.send({
                    userId: response[0]._id,
                    message: ""
                });
            } 
        }
        res.send({
            userId: 0, 
            message: "Wrong username or password" 
        });
    })
});

router.post('/registration', function(req, res) {
    const salt = crypto.randomBytes(10).toString("hex");
    const password = sha1(req.body.password + salt);
    const params = {
        login: req.body.login,
        password,
        salt
    };
    const user = new User(params);
    user.save((err) => {
        if (err) return console.log(err);
        res.send(user);
    });
});*/

router.get('/:userid', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send("OK");
});

router.delete('/:id', (req, res) => {
    db.any("DELETE FROM users WHERE id = $1", req.params.id)
    .then()
    .catch();
});

module.exports = router;
