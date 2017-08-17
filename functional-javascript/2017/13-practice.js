function doThings (count) {
  console.log(count, typeof count)
  if (count > 0) {
    setTimeout(function () {
      --count
      doThings(count)
    }, 0)
  }
}

module.exports = doThings
