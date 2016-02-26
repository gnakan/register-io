var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://register1:monkey-BIKE@ds045242.mongolab.com:45242/register-io");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000;


var Stakeholder = mongoose.model('Stakeholder', {
	firstName: String,
	lastName: String,
	middleName: String,
	tags: String
});




//Return all stakeholder data
app.get('/api/stakeholders', function(req, res){

	Stakeholder.find(function(err, stakeholders){
		if(err)
			res.send("Error:", err)

		res.json(stakeholders);
	});

	
});

app.get('*', function(req, res){
	res.sendfile('./public/');

});


app.listen(port);
console.log("Register.io started on " + port);