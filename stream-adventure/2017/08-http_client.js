// Stream Adventure
// http_client.js 08 of 15

var request = require('request')
var r = request.post('http://localhost:8099')

process.stdin.pipe(r).pipe(process.stdout)