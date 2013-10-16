var http = require('http')
var url = require('url')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
    if chunk.toString()
  })).pipe(res)
})

server.listen(8000)
