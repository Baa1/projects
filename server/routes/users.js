var express = require('express');
var router = express.Router();
var db = require('../settings/postgres');
var sha1 = require('sha1');
var crypto = require('crypto');
var mongoose = require('../settings/mongo');

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



router.get("/", function(req, res){
        
    User.find({}, {_id: 0}, function(err, users) {
        if (err) return console.log(err);
        res.send(users);
    });
});

router.post('/authorization', function(req, res) {
    User.find({login: req.body.login}, (err, response) => {
        if (err) return console.log(err);
        if (response && response.length === 1) {
            if (sha1(req.body.password + response[0].salt) === response[0].password) {
                res.send({
                    userId: response[0]._id,
                    message: ""
                });
            } else {
                res.send({
                    userId: 0, 
                    message: "Wrong password" 
                });
            }
        } else {
            res.send({ 
                userId: 0, 
                message: `Couldn't find user with login ${req.body.login}` 
            });
        }
    })
});

router.post('/registration', function(req, res) {
    var salt = crypto.randomBytes(10).toString("hex");
    var password = sha1(req.body.password + salt);
    var params = {
        login: req.body.login,
        password,
        salt
    };
    const user = new User(params);
    user.save((err, user) => {
        if (err) return console.log(err);
        res.send(user);
    });
});

module.exports = router;
