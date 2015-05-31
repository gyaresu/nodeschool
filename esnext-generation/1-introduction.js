module.exports = function makeCounter(someObj) {
  var i = 1
  someObj.next = function() {

    var done = (i > 10)
    var value = done ? undefined : i++

    return {
      done: done,
      value: value
    }
  }
  return someObj
}