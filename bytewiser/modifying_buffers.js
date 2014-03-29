// DEC  OCT HEX BIN       Symbol  Description
// 33   041 21  00100001  !       Exclamation mark
// 46   056 2E  00101110  .       Period, dot or full stop

process.stdin.on('data', function (buf) {
  for (var x = 0; x < buf.length; x++)
    if (buf[x] == 46)
      buf.write('!', x);
  console.log(buf); 
});


