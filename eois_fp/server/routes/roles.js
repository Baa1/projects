const express = require('express');
const router = express.Router();
const postgres = require('../db/postgres');

router.get('/', async (req, res) => {
    if (req.user && req.user.id > 0) {
      let sqlQuery = 'SELECT * FROM roles';
      let data = await postgres.any(sqlQuery);
      return res.send(data);
    } else {
      return res.sendStatus(401);
    }
  });

module.exports = router;