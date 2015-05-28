function *range(from, to) {
  var i = from
  while (i <= to) { // could do it with a for loop also
    yield i
    ++i
  }
}

for (var r of range(5, 10)) {
  console.log(r)
}
// should print: 5, 6, 7, 8, 9, 10