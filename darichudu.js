var express = require('express');

var router = express.Router();
var students = [
	{'name':'praveen','age':34},
	{'name':'nasir','age':29},
	{'name':'subramanyam','age':25}
]

var employees = [
	{'name':'srikanth','age':29},
	{'name':'sethu','age':20},
	{'name':'rajneesh','age':25}];
	
router.get('/',function(req,res){	
	res.end("Hello Manumits IT Solutions");
});
router.get('/employees',function(req,res){
	
	res.end(JSON.stringify(employees));
});
router.get('/students',function(req,res){
	
	res.end(JSON.stringify(students));
});

router.get('/page1',function(req,res){	
	res.end("Im page1 from manumits it solutions")
});

router.get('/page2',function(req,res){
	res.sendFile(__dirname+"/page2manumits.html");
});

module.exports = router;