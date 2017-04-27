var express = require('express');
var app = express();
app.use(express.static(__dirname));

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'Text/plain'});
    res.end('spot on');
}).listen(1337,'127.0.0.1');
console.log('server running at 127.0.0.1:1337');

app.get('/Contacts')