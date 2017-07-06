var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var string = buf.toString()

var count = string.split('\n')

console.log(count.length - 1)
