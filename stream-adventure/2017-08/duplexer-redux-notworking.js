const duplexer2 = require('duplexer2')
const through = require('through2')

module.exports = (counter) => {
  let count = {}

  function write (chunk, encoding, cb) {
    count[chunk.country] ? count[chunk.country] += 1 : count[chunk.country] = 1
    this.push(chunk)
    // console.log('write function', count)
    cb()
  }

  function end (cb) {
    console.log('end function', count)
    counter.setCounts(count)
    cb()
  }

  let writeStream = through.obj(write, end)

  return duplexer2({objectMode: true}, writeStream, counter)
}
