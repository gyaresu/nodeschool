let args = process.argv.slice(2);

let result = Math.min(...args);

console.log(`The minimum of [${args}] is ${result}`);