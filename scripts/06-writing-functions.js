function greet(person) {
  return `Hello, ${person}`;
}
/* 
    function keyword to define
    you get to choose the name - in this case 'greet'
      () holds the inputs
      {} holds the body
      return is how you provide things back to the calling code
 */

let greeting1 = greet("David");
console.log(greeting1);

let greeting2 = greet("Jane Radcliffe");
console.log(greeting2);

/* There's also an "arrow" syntax that can be used
   to define functions */
const sayHowdy = (person) => { return `Howdy ${person}!` }
/* same as:
function sayHowdy(person) {
   return `Howdy ${person}!`
}
*/
console.log(sayHowdy("Dean Coleman"));