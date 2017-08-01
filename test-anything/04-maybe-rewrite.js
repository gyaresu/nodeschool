var tape = require('tape')

var repeatCallback = require(process.argv[2])

tape('callback count', function (t) {
    var count = 10
    t.plan(count)
    repeatCallback(count, function () {
        t.pass("oh look, it ran")
    })
})
