var fs = require('fs');
var total = 0;

var file = fs.readFile(process.argv[2], function(err, data) {
  if (err) throw err;
  console.log(data.toString().split('\n').length -1);
});
//file.toString().split('\n').forEach(function(x){ total += 1});
//console.log(total);

