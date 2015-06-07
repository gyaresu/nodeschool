var net = require('net')
var port = process.argv[2]

var server = net.createServer(function (c) {
  var Time = new Date()
  c.end(Time.toISOString().slice(0, 10) + ' ' + Time.toLocaleString().slice(16, 21))
})

server.listen(port, function () {
  //console.log('listening')
})