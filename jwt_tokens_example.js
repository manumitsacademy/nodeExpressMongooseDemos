var jwt = require("jsonwebtoken");

var token = jwt.sign({"username":"praveen"},"something",{ expiresIn: '1m' });

setTimeout(function(){
	console.log("token1");
	jwt.verify(token,"something",function(err,res){console.log(res);});
	
},4000);

