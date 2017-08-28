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

  function write (chunk, _, next) {
    if (chunk.length === 0) return next() // requied or you get a SyntaxError: Unexpected end of JSON input" error
    let row = JSON.parse(chunk)
    if (row.length === 0) return next()

    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      current = {name: row.name, books: []}
    } else if (row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }

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

/* Result

{"name":"cyberpunk","books":["Snow Crash","The Diamond Age","Accelerando","Heavy Weather","Neuromancer"]}
{"name":"new wave","books":["Bug Jack Barron","The Heat Death of the Universe","Dangerous Visions"]}
{"name":"time travel","books":["The Time Machine","A Connecticut Yankee in King Arthur's Court"]}
{"name":"space opera","books":["Skylark","Void","A Deepness in the Sky"]}
{"name":"apocalypse","books":["Alas, Babylon","Earth Abides","Riddley Walker"]}
{"name":"alternate history","books":["Bring the Jubilee","The Man in the High Castle"]}

*/
