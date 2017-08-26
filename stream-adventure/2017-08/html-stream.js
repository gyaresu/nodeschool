let trumpet = require('trumpet')
let tr = trumpet()
let through = require('through2')

function write (chunk, encoding, cb) {
  this.push(chunk.toString().toUpperCase())
  cb()
}

function end (cb) {
  cb()
}

// get tr to do something useful
let loud = tr.select('.loud').createStream() // create duplex stream

// This is important: loud becomes a duplex stream
// which allows you to pass it to through2 to do transformation on the selector
// https://stackoverflow.com/questions/24103981/how-does-piping-a-stream-back-to-itself-work-with-trumpet
loud.pipe(through(write, end)).pipe(loud)

process.stdin
  .pipe(tr)
  .pipe(process.stdout)

