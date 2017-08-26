// Stream Adventure
// websockets.js 09 of 15

var ws = require('websocket-stream')

var stream = ws('ws://localhost:8099')

stream.write('hello\n')