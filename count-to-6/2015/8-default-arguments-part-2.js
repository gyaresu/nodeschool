module.exports = (text, num) => {
    return text.concat('!'.repeat(num >= 0 ? num: text.length));

    // Official Solution:
    // module.exports =
    //     (string, bangs = string.length) => string + "!".repeat(bangs);
};