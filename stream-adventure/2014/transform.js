var through = require('through');

var write = function (buf) { 
  return this.queue(buf.toString().toUpperCase());
};

var end = function () {
  //console.log('__END__');
};

var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);
