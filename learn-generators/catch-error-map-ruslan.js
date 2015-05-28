// https://stackoverflow.com/questions/30498103/why-wont-yield-return-from-within-a-map-callback
function *upper (items) {
  yield* items.map(function (item) {
    try {
      return item.toUpperCase()
    } catch (e) {
      return null
    }
  })
}

var badItems = ['a', 'B', 1, 'c']

for (var item of upper(badItems)) {
  console.log(item)
}
// A, B, null, C