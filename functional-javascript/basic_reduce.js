function countWords(inputWords) {
  return inputWords.reduce(function (newobj, word) {
    newobj[word] = ++newobj[word] || 1;
    return newobj;
  },{});
}
module.exports = countWords;
/*
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))
*/
