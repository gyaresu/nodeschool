var fs = require('fs')
var re = new RegExp('\\.' + process.argv[3] + '$')

module.exports = function (dir, filter, callback) {

  fs.readdir(process.argv[2], function (err, files) {
    if (err) 
      return callback(err);
    for (var i = 0; i < files.length; i++) {
      if (re.test(files[i]))
        console.log(files[i])
    }
  });
};
