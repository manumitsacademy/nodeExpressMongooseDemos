var express = require("express");
var cookieSession = require("cookie-session");

var app = express();
app.use(cookieSession(
{
	name:"praveen",
	keys:["Manumits"]
}
));

app.get("/",function(req,res){
	console.log("Request raised");
	res.end("<h1>Hello Manumits</h1>");
});

app.get("/home",function(req,res){res.end("<h1>Hello Home</h1>");});

app.listen(3400,function(){
	console.log("Running at 3400");
});