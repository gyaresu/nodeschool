var sum = function (i) {
	return i * 2;
};

var doubleAll = function(numbers) {
	return numbers.map(sum);
};

module.exports = doubleAll;

/*
module.exports = function doubleAll(numbers) {
	return numbers.map(function double(num) {
	return num *2
	})
}
*/