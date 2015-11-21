var http = require('http')

var result = []
var count = 0

var printResults = function () {
  // console.log(result)
  result.forEach(function (each) {
    console.log(each)
  })
}

var httpGet = function (index) {
  http.get(process.argv[index], function (res) {
    var buf = ''
    res.on('data', function (e) {
      buf += e
    // console.log(result[index])
    })
    res.on('end', function () {
      result[index] = buf
      if (count === 2) {
        printResults()
      }
      // console.log(count)
      ++count
    })
  })
}

for (var i = 2; i < 5; ++i) {
  httpGet(i)
}
