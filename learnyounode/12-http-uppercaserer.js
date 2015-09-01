var http = require('http')

var map = require('through2-map')

var upper = map(function (chunk) {
  return chunk.toString().toUpperCase()
})

var server = http.createServer(function (req, res) {
  req.pipe(upper).pipe(res)
})

server.listen(process.argv[2])
