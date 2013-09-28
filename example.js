var fs = require('fs')
function test(err, data)  {
  if (err)
    console.error('There was an error: ', err)
  data = data.toString()
  console.log(data)
}

fs.readFile(process.argv[2], test)
