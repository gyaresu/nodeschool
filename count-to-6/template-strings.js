let name = process.argv[2];

let result = `Hello, ${ name }!
Your name lowercased is "${ name.toLowerCase() }".`;

console.log(result);