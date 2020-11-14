const { GoogleSpreadsheet } = require('google-spreadsheet');
 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1og0padcIHqRkDLvIhm5gb8MF5VbSNXQ8UUodvZKgw7A');

// OR use API key -- only for read-only access to public sheets
async function loadData() {
    await doc.useServiceAccountAuth(require('./EOIS-a8f57452f189.json'));
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.loadCells('A21:C123');
    let participants = [];
    let firms = [];
    let balance = [];
    for (let i = sheet.getCellByA1('A21').rowIndex; i < sheet.getCellByA1('A123').rowIndex; i++) {
        participants.push(sheet.getCell(i, 0).value);
        firms.push(sheet.getCell(i, 1).value);
        balance.push(sheet.getCell(i, 2).value)
        sheet.getCell(i, 2);
    }        
    let users = [];    
    for (let i = 0; i < participants.length; i++) {
        users.push({
            name: participants[i],
            firm: firms[i],
            balance: balance[i]
        });
    }
    console.log(users);
}

loadData();