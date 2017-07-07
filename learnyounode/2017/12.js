// Uppercaser (12 of 13)
var http = require('http')
var map = require('through2-map')

port = process.argv[2]

var server = http.createServer(function (req, res) {
  // uppercase the requests
  req.pipe(map(function (chunk) {
    var fixed = chunk.toString().toUpperCase()
    //console.log(fixed)
    return fixed
  })).pipe(res)
})

server.listen(port)