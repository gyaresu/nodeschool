let concat = require('concat-stream')

let collect = result => {
  console.log(result.toString().split('').reverse().join(''))
}

process.stdin.on('error', function (err) {
  console.log('The error is: ', err)
})

process.stdin
  .pipe(concat(collect))
  // no need to pipe to process.stdout
