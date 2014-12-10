var request = require('request');
/*
var http = require('http');
var r = request.post('http://localhost:8000');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    return res;
  }
  else
    res.end();
});

process.stdin.pipe(r).pipe(process.stdout);

server.listen(8000);
*/
var r = request.post('http://localhost:8000');
process.stdin.pipe(r).pipe(process.stdout);
