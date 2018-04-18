const http = require("http");
const PORT2 = 7500;
var server = http.createServer(function(req, res){
	res.end("Hello! I'm the tell you something awful URL: " + req.url);
});

server.listen(PORT2, function(err){
	if(err){
		console.error("Couldn't connect, sorry..kinda", err);
	}else {
		console.log("We are now listening on port " + PORT2 + " and everyone hates you!")
	}
});