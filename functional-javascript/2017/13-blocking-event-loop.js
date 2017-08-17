function repeat (operation, num) {
  // arbitrary function and the number of times to do it

  // If decrementer hits 0 then stop
  if (num <= 0) return

  // run the function once
  operation()

  // If count is divisible by 10 then
  if (num % 10 === 0) {
    setTimeout(function () {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat

// Explanation
