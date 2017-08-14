function getShortMessages(messages) {
  return messages.filter(function (each) {
    return each.message.length < 50
  }).map(function (message) {
    return message.message
  })
}

module.exports = getShortMessages
