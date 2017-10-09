let attachTitle = (arg) => { return 'DR. ' + arg }

let promise = new Promise((resolve, reject) => {
  resolve('MANHATTAN')
}).then(attachTitle)
  .then(console.log)

