var level = require('level')

module.exports = function (dbDir, key, cb) {
    var db = level(dbDir)
    db.get(key, function (err, value) {
        if (err) throw err
        cb(null, value)
    })
}

// solution used db.close inside db.get
//
// db.close(function (err) {
//   cb(error || err, value)
// })
