const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');

router.get('/', (req, res) => {
    let sqlQuery = 'SELECT * FROM roles';
    postgres.any(sqlQuery)
        .then(data => {
            return res.status(200).send(data);
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send({message: 'Unable to get roles.'});
        })
});

module.exports = router;