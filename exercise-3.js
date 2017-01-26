//Exercise 3:

var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query(`SELECT 
    Account.id,
    Account.email,
    AddressBook.name
    FROM Account 
JOIN
    AddressBook 
    ON Account.id = AddressBook.accountId;`, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
         rows.forEach(function(row, position, table) {
             if (position === 0 || row.email != table[position - 1].email) {
                console.log('#' + row.id + ': ' + row.email);
             }
         console.log(row.name);
        });
    }
});

connection.end();