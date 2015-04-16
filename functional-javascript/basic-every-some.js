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
		goodUsers.some(function (user) {
			submittedUsers.every(function (check) {
				return;
			});
		} );
	};
};