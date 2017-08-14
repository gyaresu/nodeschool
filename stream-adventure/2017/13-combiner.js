// Stream Adventure
// combiner.js 13 of 15

var combiner = require('stream-combiner')
var split = require('split')

module.exports = function () {
  return combine(
    // write stream
    split() // split stream
    // read stream

  )
}