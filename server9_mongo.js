var mongoclient = require('mongodb').MongoClient;//import the database client lib
var url = 'mongodb://localhost:27017';
mongoclient.connect(url,function(err,client){
	if(err){
		console.log(err)
	}
	else{
		var db = client.db('mydb');
		db.collection('employee').find({}).toArray(function(err,result){
			console.log(result);
			client.close();
		});
		console.log("success")
	}	
});