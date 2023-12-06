const mysql = require('mysql2');
const env = process.env;
const pool = mysql.createPool({host: env.MYSQL_HOST, user: env.MYSQL_USER, database: env.MYSQL_DATABASE, password: env.MYSQL_PASSWORD});
module.exports = pool;