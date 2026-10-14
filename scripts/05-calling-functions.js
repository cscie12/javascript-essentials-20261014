/* () group for math */
console.log((2 + 3) * 4);
console.log( 2 + 3  * 4);

/* () are used to call functions 
      and pass values to functions 
*/
let rounded = Math.round(4.7);
console.log(rounded);

let benefactor = "John Harvard";
console.log(benefactor);
let upperCaseName = benefactor.toUpperCase(); // () needed to call function or method
console.log(upperCaseName);

// without parens, get the method itself!
console.log(benefactor.toUpperCase);

// properties though don't need parens
console.log(benefactor.length);
console.log(`Length of the string ${benefactor} is ${benefactor.length}`);

/* MDN JS reference lists the properties and methods for strings
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/