function doThings () {
  setTimeout(function () {
    console.log('more things')
    doThings()
  }, 0)
}

module.exports = doThings
