const express = require('express');
const router = express.Router();

router.get('/current_session', (req, res) => {
  let date = new Date(Date.now());
  res.send(date.toLocaleString().split(' ')[0]);
});

module.exports = router;