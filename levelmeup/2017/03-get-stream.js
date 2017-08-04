var level = require('level')

module.exports = function (dbDir, cb) {
    var db = level(dbDir)
    var results = []
    var count = 0

    db.on('error', function (err) {
       if (err.notFound) return
    })

    db.createValueStream()
        .on('data', function (value) {
            results[count] = value 
            count++
        })

    cb(null, results)
}
