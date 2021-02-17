const express = require('express');
const { query } = require('../db/postgres');
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
    let sqlQuery = 'SELECT firms.id as id, firms.name FROM firm_session LEFT JOIN firms ON firms.id = firm_session.firm_id WHERE session_id = $1';
    let data = await postgres.any(sqlQuery, req.query.session_id);
    return res.send(data);
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;