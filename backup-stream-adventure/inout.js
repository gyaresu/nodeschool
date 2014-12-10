var fs = require('fs')
var through = require('through')
var tr = through(write, end);



process.stdin.pipe(process.stdout)
