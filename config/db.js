var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
