
var arg1 = process.argv[2];
var arg2 = process.argv[3];
import {PI} from './4-modules-with-name-mod';
import {sqrt} from './4-modules-with-name-mod';
import {square} from './4-modules-with-name-mod';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));