var inputs = process.argv.slice(2)
var result = inputs.map(each => each.slice(0, 1)).reduce((accum, curr) => accum += curr)
var final = `[${inputs}]`
console.log(final, `becomes \"${result}\"`)
