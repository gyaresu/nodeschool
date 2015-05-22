module.exports = function (dirname, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dirname, function (err, files) {
    if (err)
      return callback(err);
    //console.log("The beginning of the fs.readdir");
    files = files.filter( function(item) {
      return path.extname(item) == "." + ext;
    });
    return callback(null, files);
  });
};
