var http = require('http')

var buf = ''

http.get(process.argv[2], function (res) {
    res.on('data', function (e) {
        buf += e
    })
    res.on('end', function () {
        console.log(buf.length + '\n' + buf)
    })
})

