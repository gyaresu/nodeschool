var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext) {
  console.log("The beginning of the export");
  fs.readdir(dirname, ext, function (err, files) {
    console.log("The beginning of the fs.readdir");
    files.forEach( function(item) {
      var results = [];
      if (path.extname(item) == "." + ext)
        results.append(item);
        console.log(item);
      return results;
    });
  });
};
