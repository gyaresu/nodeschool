var dr = require('./ex2');

dr(process.argv[2],process.argv[3], function(err){
      console.log("oh no! " + err);
});
