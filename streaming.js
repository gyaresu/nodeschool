var level = require('level')
var first = process.argv[2]

var db = level(first, function (err) {
  if (err) throw err
})

db.createReadStream()
  .on('data', function (data) {
    console.log(data.key + '=' + data.value)
  })
  .on('error', function (err) {
    console.log('Bloop! Error: ', err)
  })
  .on('end', function () {
  })

