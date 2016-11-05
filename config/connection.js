var mysql = require('mysql');
var connection = mysql.connection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Targetmith!2354',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
})

modules.exports = connection;