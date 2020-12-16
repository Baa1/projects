const pgp = require("pg-promise")(/*options*/);
const postgres = pgp("postgres://postgres:baa1tasar@host:5432/zendikar");

module.exports = postgres;