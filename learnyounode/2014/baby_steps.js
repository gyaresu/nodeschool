// console.log(process.argv)
var total = 0;
process.argv.forEach(function(val, index, array) {
  if (index >= 2)
    total += parseInt(val, 10);
});
console.log(total);

