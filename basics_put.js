var level = require('level')
var db = level(process.argv[2])
var string = process.argv[3]
var p = JSON.parse(string) // should be a JSON encoded string

for (var key in p) {
  if (p.hasOwnProperty(key)) {
    db.put(key, p[key])
  }
}


