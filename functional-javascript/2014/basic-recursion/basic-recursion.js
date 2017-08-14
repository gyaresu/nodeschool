module.exports = function reduce(arr, fn, initial) {    //# setup function w/target, operator, and initial value
   if (arr.length === 0) {return initial;}              //# base case, does not recurse
   initial = fn(initial, arr[0]);                       //# sets init-OP-first result as new init
   return reduce(arr.slice(1), fn, initial);            //# rightshifts first so arr[0] index is the new current value
};
