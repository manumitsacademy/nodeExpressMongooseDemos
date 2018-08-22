var mongoclient = require('mongodb').MongoClient;

mongoclient.connect("mongodb://localhost:27017",function(err,client){
	if(err){
		console.log(err);
	}
	else{
		var db = client.db("nasir");
		var coll=db.collection("project");
		coll.find({"name":"AcadCRM"}).toArray(function(err,data){
			console.log(data);			
		});
		console.log("Last Line");
	}
});