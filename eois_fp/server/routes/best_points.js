const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');

router.post('/', async (req, res) => {
  if (req.user && req.user.id > 0) {
    let sqlQuery = 'INSERT INTO best_points (value, date, time, user_id, curator_id) VALUES ($1, $2, $3, $4, $5)';
    let params = [
      req.body.value,
      req.body.date,
      req.body.time,
      req.body.user_id,
      req.body.curator_id
    ]
    await postgres.none(sqlQuery, params);
    return res.sendStatus(200);
  } else {
    return res.sendStatus(401);
  }
});

router.get('/', async (req, res) => {
  if (req.user && req.user.id > 0) {
    let user_id = req.user_id;
    let sqlQuery = 'SELECT * FROM best_points WHERE user_id = $1';
    let data = await postgres.any(sqlQuery, user_id);
    return res.send(data);
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;