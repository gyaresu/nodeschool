let websocket = require('websocket-stream')
let ws = websocket('ws://localhost:8099')

// ws._write('hello\n')
// ws._close()
ws.write('hello\n')
