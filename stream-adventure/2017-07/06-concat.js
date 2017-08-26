// Stream-Adventure
// concat.js 06 of 15

var concat = require('concat-stream')

// process.stdin.pipe(concat(function (chunks) {
//   if (err) throw err
//   var result = chunks.toString().split('').reverse().join('')
//   return result
// })).pipe(process.stdout)

process.stdin.pipe(concat(function (chunks) {
  var result = chunks.toString().split('').reverse().join('')
  console.log(result)
}))