const duplexer2 = require('duplexer2')
const through = require('through2').obj

module.exports = (counter) => {
  let count = {}

  // This function
  function write (chunk, encoding, cb) {
    // a chunk looks like:
    // {"short":"NSW","name":"New South Wales","country":"AU"}

    count[chunk.country] ? count[chunk.country] += 1 : count[chunk.country] = 1

    /*
    this.push(chunk) // this was the error...

    why? Let's find out...

    through2([ options, ] [ transformFunction ] [, flushFunction ])

    I am assuming the transformFunction function is only meant to act as a write stream because
    duplexer concatonates the write and read streams together.

    So if writeStream is acting as both... that causes problems?

    Something to look into further:
    https://nodejs.org/docs/latest/api/stream.html#stream_class_stream_transform
    */

    cb()
  }

  function end (cb) {
    counter.setCounts(count)
    cb()
  }

  let writeStream = through(write, end)

  return duplexer2({objectMode: true}, writeStream, counter)
}
