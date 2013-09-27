var http = require('http')

function juggle(err, a, b, c, callback) {
  if (err)
    console.error('There was an error: ', err)

  alpha = gather(a)
  bravo = gather(b)
  charlie = gather(c)

  display(a, b, c)
}

function gather(x) {
  http.get(x, function (request) {
    request.setEncoding('utf8')
  })
}
