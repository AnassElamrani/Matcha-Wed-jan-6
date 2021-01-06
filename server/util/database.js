const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.99.105', // ip of docker machine
    // port: '3306',
    user: 'root',
    database: 'Matcha',
    password: 'test'
});

module.exports = pool.promise();