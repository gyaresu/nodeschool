let makeImportant = (str, count = str.length) => {
  return `${str}${'!'.repeat(count)}`
}

module.exports = makeImportant
