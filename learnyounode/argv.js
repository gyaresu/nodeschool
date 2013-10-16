// print all the arguments as numbers not strings


//process.argv.slice(2).forEach(function(val, index, array){
var y = 0;
process.argv.slice(2).forEach(function(x){y += Number(x);});
console.log(y);
//});
