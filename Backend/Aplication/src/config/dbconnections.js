const mysql = require('mysql2');
const env = process.env;
const pool = mysql.createPool({
    port: env.MYSQL_PORT,
    user: env.MYSQL_USER,
    database: env.MYSQL_DATABASE,
    password: env.MYSQL_PASSWORD

});
module.exports = pool;

