var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.use(cookieParser());
app.use(session({secret:"OKOKOKOK"}));

app.get("/",function(req,res){
	if(req.session.counter){
		req.session.counter++;
		var str ="<h1>Your visits length is :"+req.session.counter;
		res.end(str);
	}
	else{
		req.session.counter =1;		
		req.session.name="nasir"
		str = 
		res.end("<h1>You are visiting for the first time</h1>");
	}
	
	
});

app.listen(4000,function(){console.log("Running on 4000")});
