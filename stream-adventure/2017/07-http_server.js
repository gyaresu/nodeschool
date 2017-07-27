// Stream Adventure
// http_server.js 07 of 15

var http = require('http')
var tr = require('through2')

var write = function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

var end = function (done) {
  done()
}

var tr = tr (write, end)

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res)
  }
})

server.listen(process.argv[2])