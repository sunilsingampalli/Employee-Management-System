var mysql = require ('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
     user: 'sunil',
     password: '12345',
    database: 'alykastesting'
});

connection.connect( function (err) {
    if (err) throw err;
    console.log("Database is Connected");
});

module.exports = connection;