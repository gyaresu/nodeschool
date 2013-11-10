var level = require('level')
var db = level(process.argv[2])

function getNext(i) {
  var key = 'gibberish' + i
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound)
        throw err
    } else
      console.log(key + '=' + data)
    
    if (i < 100)
      getNext(i + 1)
  })
}

getNext(0)
