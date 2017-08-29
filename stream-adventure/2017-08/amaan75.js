const combine = require('stream-combiner')
const split = require('split')
const through = require('through2').obj
const checkBlank = require('through')
const zlib = require('zlib')
module.exports = function () {
  const temp = {
    'name': '',
    'books': []
  }
  var tempObj = null

  function write (row, _, next) {
// console.log(row);
    row = JSON.parse(row)
    if (row.type == 'genre') {
      if (tempObj !== null) {
        this.push(JSON.stringify(tempObj) + '\n')
  //          console.log(tempObj);
      }
      tempObj = JSON.parse(JSON.stringify(temp))
      tempObj.name = row.name
    } else if (row.type == 'book') {
      tempObj.books.push(row.name)
    }
    next()
  }

  function end (done) {
    if (tempObj) {
      this.push(JSON.stringify(tempObj) + '\n')
    }
    done()
  }
  return combine(
    split(),
    checkBlank(function (text) {
      if (text.length > 0) this.push(text)
    }),
    through(write, end)
  )
}
