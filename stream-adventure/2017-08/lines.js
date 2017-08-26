let th = require('through2')
let split = require('split')
let count = 1

function write (chunk, enc, cb) {
  this.push(count % 2 === 0
    ? chunk.toString().toUpperCase() + '\n'
    : chunk.toString().toLowerCase() + '\n')
  count++
  cb()
}

function end (cb) {
  cb()
}

process.stdin
  .pipe(split())
  .pipe(th(write, end))
  .pipe(process.stdout)
