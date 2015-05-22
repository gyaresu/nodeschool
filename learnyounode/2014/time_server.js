var net = require('net');
var server = net.createServer(function (socket) {
  // do stuff
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var hour = ("0" + date.getHours()).slice(-2);
  var minute = ("0" + date.getMinutes()).slice(-2);

  socket.end(year + "-" + month + "-" + day + " " + hour + ":" + minute);
})
server.listen(process.argv[2])

