let http = require('http')
let th = require('through2')

function write (chunk, enc, cb) {
  this.push(chunk.toString().toUpperCase())
  cb()
}

function end (cb) {
  cb()
}

var server = http.createServer(function (req, res) {
  req
    .pipe(th(write, end))
    .pipe(res)
})

server.listen(process.argv[2])
