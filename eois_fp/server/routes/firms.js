const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');

router.post('/', (req, res) => {
  if (req.user && req.user.id > 0) {
    let sqlQuery = 'INSERT INTO firms (name, tagline) VALUES ($1, $2) RETURNING id';
    let params = [
      req.body.firm.name,
      req.body.firm.tagline
    ];
    postgres.one(sqlQuery, params)
    .then(data => {
      if (data) {
        let query = 'INSERT INTO firm_session (firm_id, session_id) VALUES ($1, $2)';
        console.log(data);
        let params = [
          data.id,
          req.body.sessionId
        ];
        postgres.none(query, params)
        .then(() => {
          return res.sendStatus(200);
        })
        .catch(error => {
          console.log(error);
          return res.sendStatus(500);
        })
      }
    })
    .catch(error => {
      console.log(error);
      return res.sendStatus(500);
    });
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