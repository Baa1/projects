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
    for (let i = sheet.getCellByA1('A21').rowIndex; i < sheet.getCellByA1('A123').rowIndex; i++) 
        participants.push(sheet.getCell(i, 0).value);
    for (let i = sheet.getCellByA1('A21').rowIndex; i < sheet.getCellByA1('A123').rowIndex; i++) 
        firms.push(sheet.getCell(i, 1).value);    
    let balance = [];
    for (let i = sheet.getCellByA1('A21').rowIndex; i < sheet.getCellByA1('A123').rowIndex; i++) 
        balance.push(sheet.getCell(i, 2).value);
    // for (let i = sheet.getCellByA1('D21').rowIndex; i < sheet.getCellByA1('D123').rowIndex; i++) {
    //     let summ = 0;
    //     for (let j = sheet.getCellByA1('D21').columnIndex; j < sheet.getCellByA1('BN21').columnIndex; j++) {
    //         if (sheet.getCell(i, j).value != null)
    //             summ += sheet.getCell(i, j).value;
    //     }
    //     balance.push(summ);
    // }
    // for (let i = sheet.getCellByA1('BO21').rowIndex; i < sheet.getCellByA1('BO123').rowIndex; i++) {
    //     for (let j = sheet.getCellByA1('BO21').columnIndex; j < sheet.getCellByA1('CA21').columnIndex; j++) {
    //         if (sheet.getCell(i, j).value != null)
    //             balance[i] -= sheet.getCell(i, j).value;
    //     }
    // }
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