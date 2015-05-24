var through = require('through2')
var http = require('http')

function write(buffer, encoding, next) {
    try {
        this.push(buffer.toString().toUpperCase())
    } catch (e) {
        this.emit('error', e)
    }
    next()
}

function end(done) {
    done()
}

var stream = through(write, end)

var server = http.createServer(function(req, res) {
    req.pipe(stream).pipe(res)
})

server.listen(process.argv[2])


// note to self, you didn't check for POST data.
// Solution check below

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function (buf, _, next) {
//             this.push(buf.toString().toUpperCase());
//             next();
//         })).pipe(res);
//     }
//     else res.end('send me a POST\n');