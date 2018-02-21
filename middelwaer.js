




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




module.exports = middelwaer;