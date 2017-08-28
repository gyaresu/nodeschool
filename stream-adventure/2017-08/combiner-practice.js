var zlib = require('zlib')
process.stdin.pipe(zlib.createGzip()).pipe(process.stdout)

// ls | node combiner-practice.js
