/*
var myList = [
					{ message: 'Esse id amet quis eu esse aute officia ipsum.'},
					{ antimess: 'blah blah blah'},
					{ message: 'wooble ptant etc blah trucker blah.'},
				];
*/

function getShortMessages(messages) {
	return messages.filter(function(message) {
		return message.message.length < 50;
	}).map(function (each) {
		return each.message;
	});
}

module.exports = getShortMessages;