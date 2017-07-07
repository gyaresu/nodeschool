var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err)
    files = files.filter(function (item) {
      return path.extname(item) === '.' + ext
    })
    return callback(err, files)
  })
}
