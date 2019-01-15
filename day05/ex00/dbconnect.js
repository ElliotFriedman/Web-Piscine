
var mysql = require('mysql');

var con = mysql.createConnection({
	port: "8889",
	user: "root",
	password: "root",
	database: "test_env"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});



