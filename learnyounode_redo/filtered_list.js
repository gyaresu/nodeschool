var fs = require('fs');
var path = require('path');
var ext = process.argv[3];

fs.readdir(process.argv[2], function (err, files) {
  files.forEach(function(item){
    if (path.extname(item) == "." + ext)
      console.log(item);
  });
});

