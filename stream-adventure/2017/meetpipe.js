// Stream-Adventure
// meetpipe.js 02 of 15
var fs = require('fs')

var file = process.argv[2]

fs.createReadStream(file).pipe(process.stdout)