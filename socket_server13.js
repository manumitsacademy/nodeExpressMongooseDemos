var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);


app.get("/",function(req,res){
	res.sendFile(__dirname+"/client_socket.html");
})
app.get("/admin",function(req,res){
	res.sendFile(__dirname+"/admin.html");
})
io.on("connection",function(socket){
	
	console.log("User connected",socket.id);
	socket.send("Weclome");
	socket.on("message",function(data){
		console.log(data,socket.id);
		io.sockets.emit("broadcast",{d:data,senderid:socket.id});
	});
	socket.on("disconnect",function(){console.log("User disconnected");});
	
});

http.listen(4000,function(){console.log("Server running at 4000")});