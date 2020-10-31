const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cards", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, function(err) {
    if (err) return console.log(err);
});

module.exports = mongoose;