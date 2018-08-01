var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '', 
  database : 'bobbinhood'
});

module.exports = connection; 