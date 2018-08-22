var express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app=express();
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));
var url  = require('url');
var reg_users=[{'username':'praveen','password':'abc'},{'username':'rajesh','password':'xyz'}];

app.use(function(req,res,next){
	//console.log("MID",url.parse(req.url).pathname);
	if(url.parse(req.url).pathname=='/authenticate'){
		next();	
	}
	if(req.session.user){
		console.log("Im the middleware function");
		next();		
	}
	else{
		res.sendFile(__dirname+"/login.html");
	}
});

app.get("/login",function(req,res){
	res.sendFile(__dirname+"/login.html");
});
app.get("/errlogin",function(req,res){
	res.sendFile(__dirname+"/error_login.html");
});
app.get("/register",function(req,res){
	res.sendFile(__dirname+"/register.html");
});
app.get("/home",function(req,res){
	res.sendFile(__dirname+"/home.html");
});
app.get("/aboutus",function(req,res){
	res.sendFile(__dirname+"/aboutus.html");
});
app.get("/authenticate",function(req,res){
	for(var i=0;i<reg_users.length;i++){
		if(req.query.username==reg_users[i].username && req.query.password==reg_users[i].password){
			req.session.user=req.query;
			console.log(req.session.user);
			res.redirect('/home');
		}		
	}
	res.redirect("/errlogin");
	
});
app.listen(4000,function(){console.log("Server running at 4000");});