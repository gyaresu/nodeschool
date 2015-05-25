// We can also stream a request to populate a file with data:

//     var http = require('http');
//     var fs = require('fs');
//     var server = http.createServer(function (req, res) {
//         if (req.method === 'POST') {
//             req.pipe(fs.createWriteStream('post.txt'));
//         }
//         res.end('beep boop\n');
//     });
//     server.listen(process.argv[2]);

// var http = require('http'),
//     request = require('request')

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(res)
//     }
//     res.end()
// })

// server.listen(8099)


// var r = request.post('http://localhost:8099/')

// process.stdin.pipe(r).pipe(process.stdout)

var request = require('request')
var r = request.post('http://localhost:8099/')
process.stdin.pipe(r).pipe(process.stdout)

// TODO
// note to self: figure out how this works
