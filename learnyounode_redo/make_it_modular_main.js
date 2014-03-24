var listdir = require('./make_it_modular_module');

listdir(process.argv[2], process.argv[3], function (data) {
  console.log("These are the results: " + data.forEach());
});
