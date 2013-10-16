var juggle = require('./juggling.js')

juggle(process.argv[2], process.argv[3], process.argv[4], function (err, data) {
  if (err)
    return console.error('There was an error: ', err)
  data.forEach(function (file) {
    console.log(file)
  })
})
