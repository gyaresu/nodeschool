// Juggling Async (9 of 13)
var http = require('http')
const BufferList = require('bl')
var async = require('async')

// Using async.queue but keeping BufferList
// https://github.com/nodeschool/discussions/issues/440
// http://caolan.github.io/async/docs.html#queue

urls = process.argv.slice(2)

var q = async.queue(function (task, callback) {
  http.get(task, function (res) {
    res.setEncoding('utf8')
    res.on('error', console.error)
    var bl = new BufferList()
    res.on('data', function (data) {
      bl.append(data)
    })
    res.on('end', function () {
      callback(bl.toString())
    })    

  })
})

q.push(urls, console.log)