const express = require('express');
const router = express.Router();
const mongoose = require('../settings/mongo');

const Schema = mongoose.Schema;

const cardScheme = new Schema({
    name: String,
}, 
{
    versionKey: false
});

const setScheme = new Schema({
    name: String,
}, 
{
    versionKey: false
});

const Card = mongoose.model("Card", cardScheme);
const Set = mongoose.model("Set", setScheme);

router.post('/add', function(req, res) {
    const card = new Card({name: req.body.name});
    card.save((err) => {
        if (err) return console.log(err);
        Card.find({}, (err, response) => {
            if (err) return console.log(err);
            res.send(response);
        });
    });
});

router.get('/get_cards', function(req, res) {
    Card.find({}, (err, response) => {
        if (err) return console.log(err);
        res.send(response);
    });
});

router.get('/get_sets', function(req, res) {
    Set.find({}, (err, response) => {
        if (err) return console.log(err);
        res.send(response);
    });
});

module.exports = router;