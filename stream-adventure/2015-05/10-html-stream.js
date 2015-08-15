var trumpet = require('trumpet')
var through = require('through2')
var tr = trumpet()

var loud = tr.select('.loud').createStream()

loud.pipe(through(function (buffer, encoding, next) {
    try {
        this.push(buffer.toString().toUpperCase())
    } catch (e) {
        this.emit('error', e)
    }
    next()
})).pipe(loud)


process.stdin.pipe(tr).pipe(process.stdout)