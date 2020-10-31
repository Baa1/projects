const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
    let filedata = req.file;
    console.log(filedata);
    if (!filedata)
        res.send('Uploading error...');
    else
        res.send('Upload completed');
});

module.exports = router;