// Filtered list 5 of 13

var fs = require('fs')
var path = require('path')
var ext = '.' + process.argv[3]

fs.readdir(process.argv[2], function (err, data) {
  if (err) throw err
  for (var i = 0; i < data.length; i++) {
    var p = path.extname(data[i])
    if (p === ext) {
      console.log(data[i])
    }
  }
})
