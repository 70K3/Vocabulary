var express = require('express');
var app = express();
var router = express.Router(); 

var bodyParser = require('body-parser');


app.use(express.static('public'));

app.use('/api', bodyParser.json(), router);



app.listen(50074, function() {
	console.log("Server is running")
});