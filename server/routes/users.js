var express = require('express');
var router = express.Router();
var db = require('../settings/db');
var sha1 = require('sha1');
var crypto = require('crypto');

router.post('/authorization', function(req, res) {
  db.any("SELECT * FROM users WHERE login = $1", req.body.login)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/registration', function(req, res) {
  var salt = crypto.randomBytes(10).toString("hex");
  var password = sha1(req.body.password + salt);
  var params = [
    req.body.login,
    password,
    salt
  ]
  db.any("INSERT INTO users (login, password, salt) VALUES ($1, $2, $3) RETURNING id as userId", params)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
