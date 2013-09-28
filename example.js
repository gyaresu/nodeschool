var http = require('http')
var bl = require('bl')

function gather(request)  {
  var result = ""
  http.get(request, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) 
        return console.error(data)
      data = data.toString()
      //console.log(data)
      result = data
    }))
  })
  return result
}

function threeUrls(url1, url2, url3, callback) {
  var one
    , two
    , three
  one = gather(url1, function () {
    //return one
    //console.log('This is one: ', one)
    two = gather(url2, function () {
      //return two
      //console.log('This is two: ', two)
      three = gather(url3, function () {
        //console.log('This is three: ', three)
        //return callback(one, two, three)
      })
    })
  })
  callback(one, two, three)
//  callback(gather(url1), gather(url2), gather(url3))
}

function printThree(first, second, third) {
  //console.log(first + "\n" + second + "\n" + third)
  console.log(first, second, third)
}

threeUrls(process.argv[2], process.argv[3], process.argv[4], printThree)
