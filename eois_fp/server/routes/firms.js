const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');

router.post('/', async (req, res) => {
  if (req.user && req.user.id > 0) {
    let sqlQuery = 'INSERT INTO firms (name, tagline) VALUES ($1, $2)';
    await postgres.none(sqlQuery, [ req.body.name, req.body.tagline ]);
    return res.sendStatus(200);
  } else {
    return res.sendStatus(401);
  }
});

router.get('/', async (req, res) => {
  if (req.user && req.user.id > 0) {
    let sqlQuery = 'SELECT * FROM firms';
    let data = await postgres.any(sqlQuery);
    return res.send(data);
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;