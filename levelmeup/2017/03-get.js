var level = require('level')

module.exports = function (dbDir, cb) {
    var db = level(dbDir)
    var results = []
    var error

    db.on('error', function (err) {
        error = err
    })

    var bullshit = function bullshit (i) {
        db.get('key' + i, function (err, value) {
            if (err) {
                if (!err.notFound) {
                    error = err
                }
            } else {
                results.push(value)
            }

            if (i < 100 && !error) {
                bullshit(i+1)
            } else {
                db.close(function (err) {
                    cb(error || err, results)
                })
            }
        })
    }

    bullshit(0)
}
