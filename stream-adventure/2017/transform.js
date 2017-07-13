// Stream-Adventure
// transform.js 04 of 15

var tr = require('through2')

var write = function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

var end = function (done) {
  done()
}

var tr = tr (write, end)

process.stdin.pipe(tr).pipe(process.stdout)