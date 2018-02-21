var portNumber = 2222
var express = require("express");
var app = express();

var middelwaer = {

	serverAuthentication : function(req,res, next){
		console.log("PRIVATE ROUTE HIT !!!!!");
		next()
	},

	loger : function(req, res, next){
		console.log("Request " + req.method + " " + req.originalUrl +" Date " + new Date().toString());
		next();
	}
}

app.use(middelwaer.loger)

app.get("/about", middelwaer.serverAuthentication, function(req, res){
	res.send("About Us")
})

app.use(express.static(__dirname + "/public"))


app.listen(portNumber, function () {
	console.log("express server " + portNumber + " is starded " )
})