var express = require('express');
var router = express.Router();

router.post('/upload', (req, res) => {
    let filedata = req.filedata;
    if (!filedata)
        res.send('Uploading error...');
    else
        res.send('Upload completed');
});

module.exports = router;