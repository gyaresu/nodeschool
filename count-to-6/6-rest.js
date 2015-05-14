module.exports = (...args) => {
    return args.reduce((a, b) => a + b) / args.length;
};