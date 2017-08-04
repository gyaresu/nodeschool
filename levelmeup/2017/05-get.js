var level = require('level')


module.exports = function (dbDir, obj, cb) {
    var db = level(dbDir)
    var keys = Object.keys(obj)
    var values = Object.values(obj)
    var error

    db.on('error', function (err) {
        error = err
    })

    var puts = function puts (i) {
        db.put(keys[i], values[i], function (err) {
            if (err) {
                return cb(err)
            }

            if (i < keys.length) {
                puts(i+1)
            } else {
                db.close(function (err) {
                    cb(error || err)
                })
            }
        })
    }

    puts(0)
}
