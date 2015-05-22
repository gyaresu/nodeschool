var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  var data = fs.createReadStream(process.argv[2])
  data.pipe(res)

})

server.listen(8000)

