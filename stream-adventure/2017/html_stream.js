// Stream Adventure
// html_stream.js 10 of 15

var trumpet = require('trumpet')
var through = require('through2')

var tr = trumpet()
var loud = tr.createStream('.loud')

loud.pipe(through(function (buffer, endcoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)