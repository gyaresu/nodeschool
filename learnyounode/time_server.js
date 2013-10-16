var net = require('net')
var server = net.createServer(function (c) {
  var date = new Date()
  var data = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getUTCDate()).slice(-2) + ' ' + date.getHours() + ':' + (date.getMinutes()<10?'0':'' + date.getMinutes())
  c.end(data + '\n')
})

server.listen(8000)

