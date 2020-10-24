const { response } = require('express');
var express = require('express');
var router = express.Router();
var db = require('../settings/db');

router.post('/add', function(req, res) {
    db.any('INSERT INTO cards (name) VALUES ($1) RETURNING id', req.body.name)
        .then((response) => {
            if (response && response.length === 1)
                res.send(response[0]);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/get', function(req, res) {
    db.any('SELECT * FROM cards')
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;