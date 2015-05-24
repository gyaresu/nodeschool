var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');

var stream = tr.select('.loud').createStream();

var write = function (buf) {
  return this.queue(buf.toString().toUpperCase());
};

stream.pipe(through(write)).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
