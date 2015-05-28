function *upper (items) {
  items.map(function (item) {
    try {
      yield item.toUpperCase() // error below
    } catch (e) {
      yield 'null'
    }
  }
}

var badItems = ['a', 'B', 1, 'c']

for (var item of upper(badItems)) {
  console.log(item)
}
// A, B, null, C