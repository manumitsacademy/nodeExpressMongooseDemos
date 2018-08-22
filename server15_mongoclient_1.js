var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017",function(err,client){
	if(err){
		console.log(err);
	}
	else{
		var db = client.db("nasir");
		var collections = db.collection("project");
		collections.find().toArray(function(err,data){
			if(err){
				console.log(err);				
			}
			else{
				console.log(data);
			}
			client.close();
		});		
	}	
	console.log("Last second Line");
});
console.log("Last Line");