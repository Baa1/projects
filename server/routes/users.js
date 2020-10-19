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

module.exports = router;
