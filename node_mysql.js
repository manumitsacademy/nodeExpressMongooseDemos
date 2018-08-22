var mysql = require("mysql");
var credentials = require("./dbcon");
var con = mysql.createConnection(credentials);
con.connect(function(err){
	if(err){console.log(err);}
	console.log("connected123");
	var sql = "select * from employees"
	con.query(sql,function(err,data){
		if(err){
			console.log(err);
		}
		console.log(data);
	});
});