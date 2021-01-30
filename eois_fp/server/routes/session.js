const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');
const utils = require('../utils');

router.get('/current_session', (req, res) => {
  let currentDate = utils.getCurrentDate();
  let sqlQuery = 'SELECT * FROM session WHERE date_start <= $1 AND date_end >= $1'
  postgres.any(sqlQuery, currentDate)
  .then(data => {
    if (data && data.length > 0) {
      let session = data[0];
      session.date_start = utils.getFormattedDate(session.date_start);
      session.date_end = utils.getFormattedDate(session.date_end);
      return res.send(session);
    } else {
      return res.sendStatus(404);
    }
  })
  .catch(error => {
    console.log(error);
    return res.sendStatus(500);
  });
});

module.exports = router;