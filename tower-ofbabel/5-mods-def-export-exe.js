
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Message from './5-mods-def-export-mod';

console.log(Message.PI);
console.log(Message.sqrt(+arg1));
console.log(Message.square(+arg2));