// TODO - unfinished. Scales too quickly. Hard++

var combine = require('stream-combiner')
var split = require('split')

module.exports = function () {
  return combine(
    process.openStdin(),
    split(),

}