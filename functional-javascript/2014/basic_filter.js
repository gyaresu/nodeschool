module.exports = function getShortMessages(messages) {
  return messages.filter(function(each) {
    return each.message.length < 50;
  }).map(function(each) {
    return each.message;
  });
};
