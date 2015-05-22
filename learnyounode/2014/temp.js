var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
  console.log(req);
  req.pipe(map(function (chunk) {
    
    console.log(chunk.toString());
    //return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);


