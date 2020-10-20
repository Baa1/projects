var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:baa1tasar@localhost:5432/cards");

module.exports = db;