var tape = require('tape')

var fancify = require(process.argv[2])

tape('three tests', function (t) {
    t.plan(3)

    t.equal(fancify("wooble"), "~*~wooble~*~")
    t.equal(fancify("wooble", true), "~*~WOOBLE~*~")
    t.equal(fancify("wooble", false, '!'), "~!~wooble~!~")
})

