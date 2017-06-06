var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	res.sendFile("./views/layout.html");
});

app.listen(port, function() {
	console.log("App listening on PORT " + port);
});