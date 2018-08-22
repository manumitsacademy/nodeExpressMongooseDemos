var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());
var users =[{username:"praveen",password:"123"},
			{username:"nasir",password:"abc"},
			{username:"subramanya",password:"xyz"}];
			
app.get("/",function(req,res){	
	res.sendfile(__dirname+"/login.html");	
});
app.get("/authenticate",function(req,res){
	counter=0;
	for(i=0;i<users.length;i++){
		if(users[i].username == req.query.username && users[i].password == req.query.password){
			res.cookie("username",users[i].username)
			res.end("Success");					
		}
		else{
			counter++;
		}
		if(counter==3){
			res.end("CHeck the credentials")
		}
	}
});
app.get("/home",function(req,res){	
	if(req.cookies.username){
		res.end("Hello Home")
	}
	else{
		res.sendFile(__dirname+"/login.html")
	}
});
app.get("/aboutus",function(req,res){
	if(req.cookies.username){
		res.end("Im about us");
	}
	else{
		res.sendFile(__dirname+"/login.html")
	}
	
});
app.listen(4000,function(){
	console.log("server running at 4000");
});