var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var c = {};//object to keep count of all the countries

  var write = function (buf) {
    c[buf.country] = (c[buf.country] || 0) + 1;
  };
  
  var end = function () {
    counter.setCounts(c);
  };

  var input = through(write, end);
  return duplexer(input, counter);
};
