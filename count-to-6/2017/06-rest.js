let average = (...args) => {
  var sum = args.reduce((accum, curr) => {
    return accum + curr
  })

  var avg = sum / args.length
  return avg
}

module.exports = average
