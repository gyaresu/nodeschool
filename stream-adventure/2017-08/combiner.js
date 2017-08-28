// Combine returns a stream that writes to the first stream and reads from the last stream.
// Listening for 'error' will recieve errors from all streams inside the pipe.

const combiner = require('stream-combiner')
const split = require('split')
const zlib = require('zlib')
const through = require('through2')
const gzip = zlib.createGzip()

module.exports = function () {
  // combined stream will be written newrow-separated JSON
  // {"type":"genre","name":"cyberpunk"}
  // {"type":"book","name":"Neuromancer"}
  // {"type":"book","name":"Snow Crash"}

  // Generate a newrow-separated list of JSON rows by genre
  // {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}

  // `zlib.createGzip()` the current

  let current

  // write function for through2
  function write (chunk, _, next) {
    // if (chunk.length === 0) return next() // requied or you get a "SyntaxError: Unexpected end of JSON input" error
    let row = JSON.parse(chunk)
    // console.log('first row: ', row, JSON.stringify(current)) // object { type: 'genre', name: 'cyberpunk' }
    if (row.length === 0) return next()

    if (row.type === 'genre') {
      // console.log(row) // { type: 'genre', name: 'cyberpunk' }
      if (current) {
        // console.log(`current: ${JSON.stringify(current)}`) // current: {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
        this.push(JSON.stringify(current) + '\n')
        // console.log('here?')
        // console.log(`typeof current: ${typeof current}, current: ${JSON.stringify(current)}`)
      }
      current = {name: row.name, books: []}
    } else if (row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }

  // final function call for through2
  function end (cb) {
    if (current) {
      this.push(JSON.stringify(current) + '\n')
    }
    cb()
  }

  let th = through(write, end)
  // let th = through({ objectMode: true }, write, end)

  return combiner(
    split(),
    th,
    gzip
  )
}
