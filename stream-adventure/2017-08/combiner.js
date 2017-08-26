// Combine returns a stream that writes to the first stream and reads from the last stream.
// Listening for 'error' will recieve errors from all streams inside the pipe.

const combiner = require('stream-combiner')
const split = require('split')
const zlib = require('zlib')
const through = require('through2')
const gzip = zlib.createGzip()

module.exports = function () {
  // combined stream will be written newline-separated JSON
  // {"type":"genre","name":"cyberpunk"}
  // {"type":"book","name":"Neuromancer"}
  // {"type":"book","name":"Snow Crash"}

  // Generate a newline-separated list of JSON lines by genre
  // {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}

  // `zlib.createGzip()` the result

  let collector
  let result = {}

  function write (chunk, _, next) {
    // do stuff
    console.log(chunk)
    next()
  }

  function end (cb) {
    cb()
  }

  let th = through(write, end)

  return combiner(
    split(),
    th,
    gzip
  )
}
