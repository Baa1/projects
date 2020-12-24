const express = require('express');
const router = express.Router();
const settings = require('../settings');
const crypto = require('crypto');

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

router.get('/register', (req, res) => {
  let encryptObject = encrypt(req.body.password);
  let password = encryptObject.encryptedData;
  let salt = encryptObject.iv;
  let params = [
    req.body.login,
    req.body.email,
    password,
    salt,
    req.body.name,
    req.body.surname,
    req.body.patronymic,
    req.body.birthday
  ];
  res.send(params);
});

module.exports = router;
