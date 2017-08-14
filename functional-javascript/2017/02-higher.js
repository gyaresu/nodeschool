var repeat = (operation, num) => {
  if (num >= 1) {
    return operation(num-1)
  } else {
    return operation()
  }
}

module.exports = repeat

