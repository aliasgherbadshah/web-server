var portNumber = process.env.PORT || 2222
var express = require("express");
var middelwaer = require('./middelwaer.js');
var app = express();




app.use(middelwaer.loger)

app.get("/about", middelwaer.serverAuthentication, function(req, res){
	res.send("About Us")
})

app.use(express.static(__dirname + "/public"))


app.listen(portNumber, function () {
	console.log("express server " + portNumber + " is starded " )
})