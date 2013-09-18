var fs = require('fs');
var file;
var total = 0;

file = fs.readFileSync(process.argv[2]);
total = file.toString().split('\n').length;
console.log(total);

