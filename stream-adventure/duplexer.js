var duplexer = require('duplexer');

var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  var s = spawn(cmd, args);
  return duplexer(s.stdin, s.stdout);
};
