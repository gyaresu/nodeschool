//var typedArray = new Uint8Array(process.stdin);
//console.log(typedArray.JSON.stringify());
//
process.stdin.on('data', function (data) {
  var typedArray = new Uint8Array(data);
  console.log(JSON.stringify(typedArray));
});
