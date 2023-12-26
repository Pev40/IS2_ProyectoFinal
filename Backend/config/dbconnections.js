const mysql = require('mysql2');
const env = process.env;
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'gestorpagos',
    password: 'root'
});
module.exports = pool;