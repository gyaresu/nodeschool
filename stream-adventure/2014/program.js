var fs = require('fs');
//console.log('beep boop');
//
fs.createReadStream(process.argv[2]).pipe(process.stdout);
