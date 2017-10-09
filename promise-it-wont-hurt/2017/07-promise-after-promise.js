// My answer is below but the challenge was worded very poorly

// let onFulfilled = (val) => (console.log(val))

// let first = () => new Promise((resolve, reject) => {
//   resolve('SEKRET')
// })

// let second = first()

// second.then(onFulfilled)
// ----------

first().then(second).then(console.log)
