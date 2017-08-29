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
let loud = tr.select('.loud').createStream() /* MAGIC */

// This is important: loud becomes a duplex stream
// which allows you to pass it to through2 to do transformation on the selector
// https://stackoverflow.com/questions/24103981/how-does-piping-a-stream-back-to-itself-work-with-trumpet
// Longer explanation: https://github.com/nodeschool/discussions/issues/346

// stdin -> tr(input side) -> (some kind of magic) -> loud(output side) -> (your uppercase function) -> loud(input side) -> (some more magic) -> tr(output side) -> stdout

// To clarify, for the two magic parts, trumpet is filtering the data it was given for elements with class .loud,
// and only passing those elements to loud, which outputs them into your uppercase function, once loud gets the elements back,
// it magically gives them back to tr, which stitches them back in place with the rest of the elements before everything gets streamed back to stdout.

//         -----------------------
//         |   TRUMPET STREAM    |
//         STDIN--->---|->------      ----->-|--->STDOUT
//         |        \    /       |
//         -----------------------
//                    \/
//                    /\
//             ----------------    ----------------
//             |    /    \    |    |              |
//         |-->|---        ->-|--->|------------>-|-->|
//         |   | LOUD STREAM  |    |   THROUGH2   |   |
//         |   ----------------    ----------------   |
//         |-<-------------------<------------------<-|

loud.pipe(through(write, end)).pipe(loud)

process.stdin
  .pipe(tr)
  .pipe(process.stdout)

