var mysql = require('mysql');

var db = mysql.createConnection({
	host : '3.38.64.13',  
	port: '3306',
	user: 'TT',
	password : 'passswTT1*',
	database : 'CloudContent'
});
db.connect();

module.exports = db;