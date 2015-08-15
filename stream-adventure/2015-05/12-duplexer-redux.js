// Needed to refer to the solution for this one
// Better luck next time

var duplexer = require('duplexer2')
var through = require('through2')

module.exports = function (counter) {
  var count = {}

  function transform (chunk, enc, callback) {
    count[chunk.country] = (count[chunk.country] || 0) + 1
    callback()
  }

  function end(done) {
    counter.setCounts(count)
    done()
  }

  var work = through.obj(transform, end)
  return duplexer(work, counter)

}