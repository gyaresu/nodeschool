// Stream-Adventure
// lines.js 05 of 15

var split = require('split')
var tr = require('through2')
var count = false

var write = function (buffer, encoding, next) {
  if (count == true) {
    this.push(buffer.toString().toUpperCase() + '\n')
  }
  else if (count == false) {
    this.push(buffer.toString().toLowerCase() + '\n')
  }
  count = !count
  next()
}

// THE BELOW WORKS BUT... doesn't use `this`
// var write = function (buffer, encoding, next) {
//   if (count == true) {
//     console.log(buffer.toString().toUpperCase())
//   } else {
//     console.log(buffer.toString().toLowerCase())
//   }
//   count = !count
//   next()
// }

var end = function (done) {
  done()
}

var tr = tr (write, end)

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)