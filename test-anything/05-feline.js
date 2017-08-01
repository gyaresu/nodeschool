var tape = require('tape')
var feedCat = require(process.argv[2])

tape("don't poison the kitty", function (t) {
    t.plan(2)
    t.equals(feedCat('durian'), 'yum')
    t.throws(feedCat.bind(null, 'chocolate'))
})
