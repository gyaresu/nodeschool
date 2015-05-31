module.exports = function filterForNumbers(iterable) {
  var arr = []
  for (var i of iterable) {
    if (typeof i === 'number') {
      arr.push(i)
    }
  }
  return arr
}