var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:baaltasar@localhost:5432/client");

module.exports = db;