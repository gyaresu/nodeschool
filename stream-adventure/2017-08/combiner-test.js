let c = require('./combiner') // concat version
let cStream = c()
let fs = require('fs')

let stream = fs.createReadStream(__dirname + '/combiner-books.json')
// console.log(typeof stream, c)
stream.pipe(cStream).pipe(process.stdout)
