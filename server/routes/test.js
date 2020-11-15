const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/', (req, res) => {
   console.log(req.body);
   res.send(req.body);
});

router.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'Снмок.PNG'));
});

module.exports = router;