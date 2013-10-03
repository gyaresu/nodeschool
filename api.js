var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if (req.url == '/api/parsetime')
    // works: console.log("Got the request url for parsetme");
    res.writeHead(200, { 'Content-Type': 'application:json' });
    res.end("Parsetime: " + req.url);

  if (req.url == '/api/unixtime')
    res.writeHead(200, { 'Content-Type': 'application:json' });
    res.end("Unixtime: " + req.url);
    //
  //res.end("end")
  //res.end("Thing: " + req.headers);
  console.log("grabbed url: " + url.parse(req.url, true));

});

server.listen(8000);
