var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
var fs = require('fs');
var buffer = new buffer (fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());
 });

//app.get('/', function(request, response) {
  //  var fs = require ('fs');
    //fs.readFile('index.html',function(err,data){
  //console.log(data.toString()); //replace console.log with the code to write to the response.
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
