var filter = require('./filter.js')
filter(process.argv[2], process.argv[3], function () {
  if (err) throw err;
});