// HTTP Collect (8 of 13)

var http = require('http')
const BufferList = require('bl')

var bl = new BufferList()

http.get(process.argv[2], function (res) {
  res.setEncoding('utf8')
  res.on('data', function (data) {
    // write to bl
    bl.append(data)
  })
  res.on('end', function () {
    // write contents of bl to stdout
    console.log(bl.toString().length)
    console.log(bl.toString())
  })
})
