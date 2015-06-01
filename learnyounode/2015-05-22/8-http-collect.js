var http = require('http')
const bl = require('bl')

//var bl = new BufferList()

http.get(process.argv[2], function callback(res) {
  res.setEncoding('utf8')
  res.pipe(bl(function (err, data) {
    if (err) {
      return 'Something went wrong: ' + console.error(err)
    }
    console.log(data.length + '\n' + data.toString())
  }))
})

