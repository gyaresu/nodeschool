var fs = require('fs')
var total = 0

var file = fs.readFileSync(process.argv[2])
file.toString().split('\n').forEach(function(x){ total += 1})
console.log(total -1);

