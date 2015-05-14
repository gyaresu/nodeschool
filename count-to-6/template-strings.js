let name = process.argv[2];

var result = `Hello, ${ name }!
Your name lowercased is "${ name.toLowerCase() }".`;

console.log(result);