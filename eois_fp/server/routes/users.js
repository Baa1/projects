const express = require('express');
const router = express.Router();

router.post('/register', function(req, res, next) {
  let params = [
    req.body.login,
    req.body.email,
    req.body.name,
    req.body.surname,
    req.body.patronymic,
    req.body.birthday
  ];
  
  res.send(0);
});

module.exports = router;