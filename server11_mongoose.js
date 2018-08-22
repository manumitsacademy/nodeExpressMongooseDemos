var mongoose = require("mongoose");

mongoose.connect("mongodb://praveen:hello123@ds139331.mlab.com:39331/manumits");
//mongoose.connect("mongodb://localhost:27017/nasir")

var db = mongoose.connection;
var abc = function(x){
	if(x.length>5){
		return true;
	}
	else{
		return false;
	}
}


var empSchema = mongoose.Schema(
{
	firstname:{type:String,validate:{validator:abc,msg:'too short'}},
	lastname:{type:String,required: true},
	email:{type:String, required: true}
},{strict:true});

var Employees = mongoose.model('employees',empSchema);

var emp1 = new Employees({firstname:"sa"});
//var emp2 = new Employees({firstname:"ramesh",lastname:"chandana"});

emp1.save(function(err){
	Object.keys(err.errors).forEach(function(key){
		console.log("%s:%s",key,err.errors[key].message)
	});
	
});
//emp2.save(function(err){console.log(err)});











//var emp = new Employee()
//Employees.save(function(err,data){console.log(err,data)})

//mongoose = mongoClient+Schema checkker