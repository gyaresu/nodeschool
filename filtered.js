var fs = require('fs');
var re = new RegExp('\\.' + process.argv[3] + '$');

fs.readdir(process.argv[2], function (err, x) {
  if (err) throw err;
  for (var i = 0; i < x.length; i++) {
    if (re.test(x[i])) 
      console.log(x[i]);
  }
});
