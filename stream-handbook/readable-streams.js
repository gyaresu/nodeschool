var Readable = require('stream').Readable
var rs = new Readable()

// 'c' here represents Character Codes:
// http://www.asciitable.com/

var c = 97 - 1

rs._read = function () {
  // Is c larger than zeroth item of string 'z'? (122)
  if (c >= 'z'.charCodeAt(0)) {
    // Make sure to RETURN the stream killer!
    return rs.push(null)
  }
  setTimeout(function () {
    // c++ uses the string CharCode value but then increments it
    rs.push(String.fromCharCode(++c))
  // delay time
  }, 10)
}

// Only as it's being called does _read fire
rs.pipe(process.stdout)

process.on('exit', function () {
  console.error('\n_read() called ' + (c - 97) + ' times')
})

process.stdout.on('error', process.exit)
