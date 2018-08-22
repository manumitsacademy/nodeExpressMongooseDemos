var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get("/socket.io.js",function(req,res){
	res.sendFile(__dirname+"/socket.io.js")
});

app.get("/",function(req,res){
	res.sendFile(__dirname+"/homepage.html");
});

io.on("connection",function(socket){
	console.log("New user connected");
	socket.send("Welcome to node socket handling@!@@@")
	socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
   socket.on("message",function(data){console.log(data);});
});
http.listen(3000,function(){console.log("server running at 3000")});