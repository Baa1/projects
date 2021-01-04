const crypto = require('crypto');
const settings = require('../settings');

function encrypt(text) { 
    // Defininf iv 
    const iv = crypto.randomBytes(16);
    // Creating Cipheriv with its parameter 
    let cipher = crypto.createCipheriv(settings.ALGORITHM, Buffer.from(settings.KEY), iv); 
    // Updating text 
    let encrypted = cipher.update(text); 
    // Using concatenation 
    encrypted = Buffer.concat([encrypted, cipher.final()]); 
    // Returning iv and encrypted data 
    return { 
        iv: iv.toString('hex'),  
        encryptedData: encrypted.toString('hex') 
    }; 
} 

function decrypt(text) { 
    let iv = Buffer.from(text.iv, 'hex'); 
    let encryptedText = Buffer.from(text.encryptedData, 'hex'); 
    // Creating Decipher 
    let decipher = crypto.createDecipheriv(settings.ALGORITHM, Buffer.from(settings.KEY), iv); 
    // Updating encrypted text 
    let decrypted = decipher.update(encryptedText); 
    decrypted = Buffer.concat([decrypted, decipher.final()]); 
    // returns data after decryption 
    return decrypted.toString(); 
}

function getFormattedDate(date) {
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}

module.exports = {
    encrypt,
    decrypt,
    getFormattedDate
}