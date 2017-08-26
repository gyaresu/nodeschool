const duplexer = require('duplexer2')
const through = require('through2')

module.exports = (counter) => {
  let count = {}

  // make a write function for our writeable stream
  function write (chunk, encoding, cb) {
    // which adds its data to the count object
    // console.log(chunk.country)
    count[chunk.country] ? count[chunk.country] += 1 : count[chunk.country] = 1
    // console.log(count)


    // this.push(chunk) <--


    cb()
  }

  function end (cb) { // end isn't getting called from within through.obj
    // It's supposed to return the count object when the data has finished
    console.log('Count is: ', count)
    counter.setCounts(count)
    cb()
  }

  // now finally create a writeable stream
  let writeStream = through.obj(write, end)

  // counter setCounts(count) // read stream has this as a method(?)
  return duplexer(writeStream, counter)
}
