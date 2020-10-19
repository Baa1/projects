var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      name: "Main",
      id: 1
    },
    {
      name: "About",
      id: 2
    },
    {
      name: "Exit",
      id: 3
    }
  ]);
});

module.exports = router;
