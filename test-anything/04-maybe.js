var tape = require('tape')

var repeatCallback = require(process.argv[2])

tape('callback count', function (t) {
    var should = 2
    var has = 0
    t.plan(1)
    repeatCallback(should, function () {
        has++
    })
    t.equal(should, has, "should be equal")
})
