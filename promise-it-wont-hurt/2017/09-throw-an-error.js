let parsePromised = (arg) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(arg))
    } catch (e) {
      // had to rewrite the solution to make this work
      // https://github.com/stevekane/promise-it-wont-hurt/issues/102
      reject(e.message)
    }
  })
}

parsePromised(process.argv[2])
  .then(null, console.log)
