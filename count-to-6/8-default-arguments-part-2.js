module.exports = (text, num) => {
    return text.concat('!'.repeat(num >= 0 ? num: text.length));
};