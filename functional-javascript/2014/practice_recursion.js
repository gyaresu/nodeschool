var stack = [];

function power(base, exponent) {
  if (exponent === 0)
    return 1;
  else 
    stack[exponent - 1] = base * power(base, exponent -1);
    console.log(stack[exponent -1] + " : " + stack);
    return stack[exponent -1];
}
console.log(power(2,5));
