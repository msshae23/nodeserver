const http = require("http");
const PORT1 = 7000;
var server = http.createServer(function(req, res){
	res.end("Hello! I'm the tell you something good URL: " + req.url);
});

server.listen(PORT1, function(err){
	if(err){
		console.error("Couldn't connect, sorry..kinda", err);
	}else {
		console.log("We are now listening on port " + PORT1 + " and you are the sweetest person!")
	}
});