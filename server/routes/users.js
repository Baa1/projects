var express = require('express');
var router = express.Router();
var db = require('../settings/db');
var sha1 = require('sha1');
var crypto = require('crypto');

router.post('/authorization', function(req, res) {
  db.any("SELECT * FROM users WHERE login = $1", req.body.login)
    .then((response) => {
      if (response && response.length === 1) {
        if (sha1(req.body.password + response[0].salt) === response[0].password) {
          res.send({ 
            userId: response[0].id,
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
      let user = {
        id: 0,
        login: ""
      };
      if (response && response.length > 0)

      res.send(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
