var args = process.argv,
    total = 0

args.slice(2).forEach(function (each) {
    total += +each
})

console.log(total)