var through = require('through');

var count = 1;

var write = function (buf) {
  if (count % 2 === 0)
    console.log(buf.toString().toUpperCase());
  else
    console.log(buf.toString().toLowerCase());
  count++;
};

var split = require('split');

process.stdin
  .pipe(split())
  .pipe(through(write));
