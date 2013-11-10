var level = require('level')
var db = level(process.argv[2])
var file = process.argv[3]
var fs = require('fs')
var commands = []

fs.readFile(file, function(err,data) {
  if(err) 
    throw err
  var array = data.toString().split('\n')
  for (i in array) {
    var x = array[i].split(',')
    if (x[0] === 'put') {
      var y = ('{ ' + "type: 'put'" + ',' + " key: '" + x[1] + "', value: '" + x[2] + "'" + '}')
      commands.push(y)
    } 
    else if (x[0] === 'del') {
        var z = ('{ ' + "type: 'del', key: '" + x[1] + "' }")
        commands.push(z)
    }
  }
  console.log(commands[0])
})

//db.batch(commands)
console.log(commands[0])

