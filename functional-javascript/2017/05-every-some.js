function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (goodUser) {
        //if (submittedUser.id === goodUser.id) {
        //  console.log(submittedUser.id, goodUser.id) 
        //}
        return submittedUser.id === goodUser.id
      })
    })
  }
}

module.exports = checkUsersValid
