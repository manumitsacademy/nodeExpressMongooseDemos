var mongoose = require("mongoose");

mongoose.connect("mongodb://praveen:hello123@ds139331.mlab.com:39331/manumits");
//mongoose.connect("mongodb://127.0.0.1:27017/nasir");

var db = mongoose.connection;
/*
var projectSchema = mongoose.Schema({
	"name":String,
	"pid":String,
	"location":String	
});
*/
mongoose.model('employees',{name:String}).find(function(err,res){console.log(res)});