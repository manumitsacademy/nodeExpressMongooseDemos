var express = require("express");
var app=express();
var reg_users=[{'username':'praveen','password':'abc'},{'username':'rajesh','password':'xyz'}];
app.use(function(req,res,next){
	console.log("Im the second middleware function");
	next();
});
app.use(function(req,res,next){
	console.log("Im the middleware function");
	next();
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
	console.log(req);
	for(var i=0;i<reg_users.length;i++){
		if(req.query.username==reg_users[i].username && req.query.password==reg_users[i].password){
			res.redirect('/home');
		}		
	}
	res.redirect("/errlogin");
	
});
app.listen(8000,function(){console.log("Server running at 8000");});