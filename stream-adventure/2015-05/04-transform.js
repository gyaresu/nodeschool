var tr = require('through2')

function write(buffer, encoding, next) {
    try {
        this.push(buffer.toUpperCase()) //buffer needs .toString()
    } catch (e) {
        this.emit('error', e)
    }
    next()
}

function end(done) {
    done()
}

var stream = tr(write, end)

stream.on('error', function (e) {
    console.log('Broked it.', e)
})

process.stdin.pipe(stream).pipe(process.stdout)