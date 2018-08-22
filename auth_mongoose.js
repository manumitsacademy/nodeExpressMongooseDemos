var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
mongoose.connect("mongodb://praveen:hello123@ds139331.mlab.com:39331/manumits");
var userSchema = mongoose.Schema({
	username:String,
	password:String,
	level:Number	
});
var User = mongoose.model('users',userSchema);
var studentSchema = mongoose.Schema({
	studentname: String,
    studentfee: Number,	
});
var Student = mongoose.model('students',userSchema);
app.get("/login",function(req,res){
	res.sendFile(__dirname+"/login.html");
});
app.get("/students",function(req,res){
	console.log(req);
	Student.find({},function(err,data){
		res.json(data);
	})
})
app.get("/authenticate",function(req,res){
	User.findOne({username:req.query.username},function(err,data){
		if(data!=null && data.password==req.query.password){
			var token = jwt.sign({ foo: 'bar' }, 'shhhhh');	
			res.json({'token':token,username:data.username,level:data.level})
			res.end("HEllo word");
			console.log(data,token);
		}
		else{
			res.end("User credentials are not matching@@@");
		}
		if(!err){			
			console.log("No User Found12345");
			res.end("No User Found");
		}
	});
});
app.get("/",function(req,res){
	console.log("Global ROOT");
	res.end("HELLO MANUMITS");
});
app.listen(4000,()=>{console.log("server running on 4000");});