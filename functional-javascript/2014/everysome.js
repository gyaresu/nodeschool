var checkUserValid = function (biglist) {
  return function (checkusers) {
    return checkusers.every(function (check) {
      return biglist.some(function (big) {
        return big.id === check.id;
      });
    });
  };
};

module.exports = checkUserValid;

