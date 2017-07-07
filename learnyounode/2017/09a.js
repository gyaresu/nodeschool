// Juggling Async (9 of 13)
var http = require('http')
const BufferList = require('bl')

var count = 0

var arr = []

for (var i = 0; i < 3; i++) {
  http.get(process.argv[2], function (res) {
    res.setEncoding('utf8')
    var bl = new BufferList()
    res.on('data', function (data) {
      bl.append(data)
    })
    res.on('end', function () {
      arr[0] = bl.toString()
      count++
      if (count == 3) {
        console.log(arr[0])
        console.log(arr[1])
        console.log(arr[2])
      }
    })
  })
}