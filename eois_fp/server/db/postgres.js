const pgp = require('pg-promise')();
const settings = require('../settings');
const postgres = pgp(`postgres://${settings.PG_USERNAME}:${settings.PG_PASSWORD}@${settings.PG_HOST}:${settings.PG_PORT}/${settings.PG_DATABASE}`);

module.exports = postgres;