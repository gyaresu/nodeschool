var fs = require('fs');
var http = require('http');
var file = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (req, res) {
  //stuff
  file.pipe(res);

});

server.listen(process.argv[2]);

