var level = require('level')


module.exports = function (dbDir, changes, cb) {
    level(dbDir, function (err, db) {
        if (err) throw err
        for (var each in changes.put) {
            db.batch().put(each, changes.put[each], function (err, value) {
                if (err) return console.error(err)
                console.log(value)
            })
        }
        for (var each in changes.del) {
            db.batch().del(changes.del[each], function (err, value) {
                if (err) return console.error(err)
                console.log(value)
            })

        }

        db.batch().write(function () {console.log('Done!')})
    })
}
