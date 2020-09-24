import foo from "./import.js"

console.log(`defualt import: `, foo);
console.log(`defualt import use: `, foo(3));

import { someObject, someString, b as otherString, double } from "./import.js"

console.log(`imports:\nsomeObject=`, someObject, `\nsomeString='${someString}'\notherString='${otherString}'\ndouble(2)=${double(2)}`)