var http = require('http');
var through = require('through');
//var tr = through(write);

/*var write = function (buf) {
  this.queue(buf.toString().toUpperCase());
};
*/

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
  else 
    res.end('urmagherd\n');
});

server.listen(parseInt(process.argv[2] || 8000));

/*
 * https://github.com/substack/stream-adventure/issues/77
 * You need to create a separate instance of your through stream for each request. You cannot share one instance of the through stream amongst requests. Bad things happen.
 */
