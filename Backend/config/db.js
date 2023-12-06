const { createPool } = require("mysql");

const env = process.env;

const pool = createPool({
  port: env.MYSQL_PORT,
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  connectionLimit: env.MYSQL_CONNECTION_LIMIT,
});

module.exports = pool;
