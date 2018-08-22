var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/",function(req,res){
	res.sendFile(__dirname+"/sockects_home.html")
});
app.get("/socket.io.js",function(req,res){
	res.sendFile(__dirname+"/socket.io.js")
});
io.on("connection",function(socket){
	socket.send("Welcome");
	socket.on("disconnect",function(){
		console.log("a user disconnected");
	});	
});

http.listen(4000,function(){console.log("http server running on 4000")});

