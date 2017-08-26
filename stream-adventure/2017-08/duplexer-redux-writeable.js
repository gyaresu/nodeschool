const duplexer = require('duplexer2')
const Writeable = require('stream').Writable

module.exports = function (counter) {
  let count = {}
  const input = Writeable({objectMode: true})
  input._write = function (chunk, enc, next) {
    count[chunk.country] ? count[chunk.country] += 1 : count[chunk.country] = 1
    next()
  }

  // Why 'finish'?
  // https://nodejs.org/api/stream.html#stream_events_finish_and_end
  input.on('finish', function () {
    counter.setCounts(count)
  })

  // console.log(typeof Writeable)
  return duplexer({objectMode: true}, input, counter)
}
