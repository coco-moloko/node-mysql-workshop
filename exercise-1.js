var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query("SELECT * FROM Account", function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
         rows.forEach(function(row) {
         console.log('#' + row.id + ': ' + row.email.cyan);
        });
    }
});

connection.end();