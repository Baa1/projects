var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:iq666@localhost:5432/kr');

/* GET home page. */
router.get('/load_all', function(req, res, next) {
    var identity = req.query.identity;
    res.send(identity);
    db.any('SELECT * FROM desks WHERE identity = $1', identity)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = router;
