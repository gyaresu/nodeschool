var fs = require('fs');
var file;
var total = 0;

file = fs.readFileSync(process.argv[2]);
file.toString().split('\n').forEach(function(x){ total += 1});
console.log(total);

