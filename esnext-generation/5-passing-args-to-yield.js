module.exports = function *multiplier() {
  var num = 1,
      mult = false

  while (true) {
    mult = yield mult ? num * mult : num
    if (!mult) {
      mult = false
    }
    ++num
  }
}

// var it = multiplier();
// console.log(it.next().value) // 1
// console.log(it.next().value) // 2
// console.log(it.next(2).value) // 6 (2 * 3)
// console.log(it.next(5).value) // 20 (5 * 4)
// console.log(it.next(3).value) // 15 (3 * 5)
// // ... etc