var concat = require('concat-stream')

process.stdin.pipe(concat(function (err) {
    console.log(err.toString().split('').reverse().join(''))
}))