// Make it modular 6 of 13

var worker = require('./six-module')

worker(process.argv[2], process.argv[3], function (err, data) {
  if (err) return err
  data.forEach(function (file) {
    console.log(file)
  })
})
