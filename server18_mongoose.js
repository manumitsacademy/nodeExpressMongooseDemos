var mongoose = require("mongoose");

mongoose.connect("mongodb://praveen:hello123@ds139331.mlab.com:39331/manumits");
function abc(x){
	if(x.length<3){
		return false;
	}
	else{
		return true
	}
}
var subjectSchema = mongoose.Schema({
	subjectname:{type:String,unique:true,validate:{validator:abc,msg:"subject name is too short"}},
	subjectcost:{type:Number,required:true},
	subjectduration:{type:Number, min:30,max:45}
});

var Subject = mongoose.model('subjects',subjectSchema);

/*Subject.update({_id:"5b61d9fdac81d31cf8cd2c47"},{$set:{"subjectcost":23000}},function(){console.log("coursecost updated")});*/

//Subject.remove({subjectname:/php/},function(err){console.log(err)});

//Subject.update({_id:"5b61d94d9cf4d9141c37bef3"},{$set:{"subjectcost":1300}},function(){console.log("updated");});


Subject.findOne({subjectname:"php"},function(err,data){
	console.log(data);
	if(!err){
		data.subjectcost=1111;
		data.save(function(err,d){
			console.log(err)
			console.log("Saved",d)
		});
	}
});
/*var s1 = new Subject({subjectname:'jo',subjectduration:60});

s1.save(function(err){
	for(i in err.errors){
		console.log(err.errors[i].message)
	}
});
*/


/*Subject.find({},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log(data);
	}
});*/

