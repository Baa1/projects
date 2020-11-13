const express = require('express');
const router = express.Router();
const { GoogleSpreadsheet } = require('google-spreadsheet');
 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1og0padcIHqRkDLvIhm5gb8MF5VbSNXQ8UUodvZKgw7A');

// OR use API key -- only for read-only access to public sheets
async function loadData() {
    await doc.useServiceAccountAuth(require('../settings/EOIS-a8f57452f189.json'));
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    
    await sheet.loadCells('A21:A123');
    let users = [];
    for (let i = 20; i < 123; i++)
        users.push(sheet.getCell(i, 0).value);
    return users;
}

router.get('/google', async (req, res) => {
   let data = await loadData();
   res.send(data);
});

module.exports = router;