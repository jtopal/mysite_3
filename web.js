var express = require('express');

var app = express.createServer(express.logger());
var about_html = 'about.html';
var contact_html = 'contact.html';

app.get('/', function(request, response) {
var fs = require('fs');
var buf = new Buffer (fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());

app.get('/about', function(request, response) {
var fs = require('fs');
var buf = new Buffer (fs.readFileSync('about_html'), 'utf-8');
  response.send(buf.toString());

app.get('/contact', function(request, response) {
var fs = require('fs');
var buf = new Buffer (fs.readFileSync('contact_html'), 'utf-8');
  response.send(buf.toString());

 });


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
