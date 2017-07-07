// HTTP Server (11 or 13)
var http = require('http')
var fs = require('fs')

const port = process.argv[2]
var file = process.argv[3]

var server = http.createServer(function (req, res) {
  // handle requests
  fs.createReadStream(file).pipe(res)
})

server.listen(port)
