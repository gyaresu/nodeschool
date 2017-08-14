/*
## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false
*/

module.exports = function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every(function (good) {
			return goodUsers.some(function (check) {
				//console.log(good.id, " and ", check.id);
				return good.id === check.id;
			});
		} );
	};
};