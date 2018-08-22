
var express = require("express");
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
//var cors = require("cors");

//app.use(cors());

var routes = require('./darichudu')

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.use('/',routes);

app.listen(2000,function(){
	console.log("to run the application visit http://localhost:2000")
});