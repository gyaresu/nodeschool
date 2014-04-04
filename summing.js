function minimumSum(values, n) {
  // sum the n smallest integers in the array values (not necessarily ordered)
  if (n === 0)
    return 0;
  else if (values.length === 0)
    return;
  var count = 0;
  values.sort();
  for (var i = 0; i < n; i++)
    count += values[i];
  return count;
    
}

function maximumSum(values, n) {
  // sum the n largest integers in the array values (not necessarily ordered)
  if (n === 0)
    return 0;
  else if (values.length === 0)
    return;
  var count = 0;
  values.sort();
  for (var i = (values.length - n); i< values.length; i++){
    count += values[i];
  }
  return count;
}
//var x = [1,2,3,4,5];
var x = [2,4,3,5,1];
console.log("Minumum Sum: " + minimumSum(x,5));
console.log("Maximum Sum: " + maximumSum(x,5));

