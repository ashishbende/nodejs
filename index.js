var http = require('http');
var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.end('Hello World!');
});

http.createServer(app).listen(3000);