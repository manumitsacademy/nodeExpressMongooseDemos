var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var url  = require('url');
var session = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());
app.use(session({secret:"Hello World"}));
var reg_users = [{'username':'praveen','password':'abc'},{'username':'rajesh','password':'xyz'}];

app.use(function(req,res,next){
	if(url.parse(req.url).pathname=='/authenticate'){
		next();	
	}
	if(req.session.user){
		next();
	}
	else{
		res.sendFile(__dirname+"/login.html");
	}
});

app.get("/",function(req,res){
	res.sendFile(__dirname+"/home.html");
});
app.get("/login",function(req,res){
	res.sendFile(__dirname+"/login.html");	
});

app.get("/authenticate",function(req,res){
	for(var i=0;i<reg_users.length;i++){
		if(req.query.username==reg_users[i].username && req.query.password==reg_users[i].password){
			req.session.user=req.query;
			console.log(req.session.user);
			res.redirect('/home');
		}		
	}
});

app.get("/home",function(req,res){	
	res.sendFile(__dirname+"/home.html");
});

app.get("/homedata",function(req,res){
	mongoClient.connect("mongodb://localhost:27017",function(err,client){
		if(err){
			console.log(err);
		}
		else{
			var db = client.db("nasir");
			var collections = db.collection("project");
			collections.find().toArray(function(err,data){
				if(err){
					console.log(err);				
				}
				else{
					res.send(data);
					res.end();
				}
				client.close();
			});		
		}	
		console.log("Last second Line");
	});	
});

app.get("/aboutus",function(req,res){
	res.sendFile(__dirname+"/aboutus.html");
});
app.get("/logout",function(req,res){
	req.session.destroy();
	res.redirect("/login");
});
app.listen(4000,function(){console.log("server running on 4000")});