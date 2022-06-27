var mysql = require('mysql');

var db = mysql.createConnection({
	host : '43.200.25.214',  
	port: '3306',
	user: 'G',
	password : 'passswG1*',
	database : 'CloudContent'
});
db.connect();

module.exports = db;