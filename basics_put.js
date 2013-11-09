var level = require('level')
var db = level(process.argv[2])

string = JSON.parse(process.argv[3]) // should be a JSON encoded string

for (var i = 0; i < string.length; i++)
  console.log(string[i])


