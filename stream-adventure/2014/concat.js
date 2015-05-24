//var concat = require('concat-stream');
//
//var rev = function (buf) {
//  var obj = buf.toString().split('').reverse().join('');
//  console.log(obj);
//};
//
//process.stdin.pipe(concat(rev));//.pipe(process.stdout);

var concat = require('concat-stream');

process.stdin.pipe(concat(function (i) {
  var j = i.toString().split('').reverse().join('');
  console.log(j);
}));
