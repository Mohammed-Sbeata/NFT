const { Pool } = require('pg');
require('dotenv').config();

const { DEV_DB_URL } = process.env;

const options = {
  connectionString: DEV_DB_URL,
  ssl: false,
};

const connection = new Pool(options);
module.exports = connection;
