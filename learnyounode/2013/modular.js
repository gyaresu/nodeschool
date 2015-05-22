var filter = require('./filter.js')
filter(process.argv[2], process.argv[3], function (err, list) {
  if (err)
    return console.error('There was an error: ', err)

  list = list.forEach(function (file) {
    console.log(file)
  })
})
