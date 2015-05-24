var http = require('http')
const BufferList = require('bl')

var bl = new BufferList()

http.get(process.argv[2], function callback (response) {
    response.setEncoding('utf8')
    response.pipe(BufferList(function (err, data) {
        if (err) {
            return 'Something went wrong: ' + err
        }
        bl.append(new Buffer(data))
    }))
    console.log(bl.length)
    console.log(bl.toString())
})