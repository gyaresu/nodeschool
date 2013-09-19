var fs = require('fs');
var file;
var total = 0;

fs.readFile(process.argv[2], function(err, data) {
  if (err) throw err;
  console.log(data.toString().split('\n').length);
});
//file.toString().split('\n').forEach(function(x){ total += 1});
//console.log(total);

