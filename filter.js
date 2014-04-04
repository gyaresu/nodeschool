function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  console.log(numbersArray.filter(filterOdd));
}

function filterOdd(item) {
  return item % 2 === 0;
}

var x = [1,13,2,4,7];

getEvenNumbers(x);
