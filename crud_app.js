var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://praveen:hello123@ds139331.mlab.com:39331/manumits");
var employeeSchema = mongoose.Schema({
	firstname:{type:String},
	lastname:{type:String}
});
var Employee = mongoose.model('employees',employeeSchema);

app.get("/",function(req,res){
	res.sendFile(__dirname+"/apphome.html");
});
app.get("/update/:id/:fn/:ln",function(req,res){
	console.log(req.params);
	var updateform = "<form action='/updateEmp/"+req.params['id']+"' method='get'>";
	updateform +="<input type='text' value='"+req.params['fn']+"' name='firstname'>";
	updateform +="<input type='text' value='"+req.params['ln']+"' name='lastname'>";
	updateform +="<input type='submit'>";
	res.send(updateform);
	
});
app.get("/employees",function(req,res){
	var createemplink = "<a href='/createEmp'>Create Employee</a>";
	res.write(createemplink);
	Employee.find({},function(err,data){
		for(var i=0;i<data.length;i++){
			var em = "<h1>"+data[i].firstname+"</h1>";
			em= em+"<a href='/update/"+data[i]._id+"/"+data[i].firstname+"/"+data[i].lastname+"'><button>Update</button></a>";
			res.write(em);
		}
		res.end();
	});	
});
app.get("/createEmp",function(req,res){
	res.sendFile(__dirname+"/createEmployee.html");
});

app.get("/saveEmp",function(req,res){
	var emp = new Employee(req.query);	
	emp.save(function(err){
		if(err){
			console.log(err);
		}
		res.write("<a href='/employees'>got to employees</a>")
		res.end("Employee created")
	});
})
app.get("/updateEmp/:id",function(req,res){
	console.log(req.params);
	console.log(req.query);
	Employee.update(
		{_id:req.params['id']},
		{$set:req.query},
		function(){
			console.log("updated");
			res.end("Employee Updated Successfully");
		});
	
})














app.listen(4000,function(){console.log("App Server running on 4000")});