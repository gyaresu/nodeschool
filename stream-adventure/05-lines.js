var tr = require('through2')
var split = require('split')
var count = true

function write(buffer, encoding, next) {
    if (count === true) {
        try {
            this.push(buffer.toString().toLowerCase())
            count = false
        } catch (e) {
            this.emit('error', e)
        }
    } else {
        try {
            this.push(buffer.toString().toUpperCase())
            count = true
        } catch (e) {
            this.emit('error', e)
        }
    }
    next()
}

function end(done) {
    done()
}

var stream = tr(write, end)

stream.pipe(split(/(\r?\n)/))

stream.on('error', function (e) {
    console.log('Broked it.', e)
})

process.stdin.pipe(stream).pipe(process.stdout)