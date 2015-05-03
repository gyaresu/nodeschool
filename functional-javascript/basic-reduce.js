/*
## Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
*/

function countwords(inputWords) {


    return inputWords.reduce(function(newobj, item) {
        newobj[item] =  ++newobj[item] || 1;
        return newobj;
    },{});
}

module.exports = countwords;