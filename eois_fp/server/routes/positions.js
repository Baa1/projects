const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres')

router.get('/', (req, res) => {
  if (req.user && req.user.id > 0) {
    let sqlQuery = `SELECT * FROM positions`;
    postgres.any(sqlQuery)
    .then(data => {
        return res.send(data);
    })
    .catch(error => {
        console.log(error);
        return res.sendStatus(500);
    });
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;