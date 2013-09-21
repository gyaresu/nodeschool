module.exports = dirReader;

function dirReader(directory, extension, err) {
  var fs = require('fs')
  var re = new RegExp('\\.' + extension + '$');

  fs.readdir(directory, function (err, list) {
    if (err) return err;
    for (var i = 0; i < list.length; i++) {
      if (re.test(list[i]))
        console.log(list[i]);
    }
  });
};
