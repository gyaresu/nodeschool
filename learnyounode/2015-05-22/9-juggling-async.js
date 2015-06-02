var http = require('http')
//var async = require('async')
var bl = require('bl')

var args = process.argv.slice(2)
var count = 0

//console.log(args)

function doStuff(cb) {
  var result = []
  args.forEach(function (err, data) {
    if (err) {
      console.error(err)
    }
    console.log(data)
    http.get(data, function (res) {
      return res.pipe(bl(function (e, chunk) {
        if (e) {
          return err
        }
        result.push(chunk)
      }))
    })
    ++count
  })
}

function callback(r) {
  console.log(r)
}

doStuff(callback)