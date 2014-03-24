var listdir = require('./make_it_modular_module');

listdir(process.argv[2], process.argv[3], function (err, data) {
  if (err)
    console.log("There was an err: " + err);
  data.forEach(function (item) {
    console.log(item);
  });
});
