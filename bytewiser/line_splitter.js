//DEC OCT HEX BIN       Symbol  Description
//92  134 5C  01011100  \       Backslash
var fs = require('fs');
var temp = 0;

fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  for (var i = 0; i <= data.length; i++) {
    if (data[i] === 10) {
      console.log(data.slice(temp,i));
      i++;
      temp = i;
    } else if (i === data.length) {
      console.log(data.slice(temp,data.length));
    }
  }
});
