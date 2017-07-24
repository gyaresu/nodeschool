// Stream Adventure
// duplexer_redux.js 12 of 15

var duplexer = require('duplexer2')
var through = require('through2').obj

module.exports = function (counter) {
  var countries = {}

  var write = function (buffer, encoding, next) {
    if (countries[buffer.country]) {
      countries[buffer.country] ++
    } else {
      countries[buffer.country] = 1
    }
    next()
  }

  var end = function (done) {
    counter.setCounts(countries)
    done() // remember to call done, dummy
  }

  var th = through(write, end)

  return duplexer({objectMode: true}, th, counter)
}