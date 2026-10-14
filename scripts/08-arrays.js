let basket = ["bananas", "pears", "apples", "oranges"];
console.log(basket);

let firstItem = basket[0];
console.log(`first item in basket is ${firstItem}`);
console.log(`second item is ${basket[1]}`);

console.log("=".repeat(20));

/* for..of */
console.log("Using for..of");

/* iterate or loop over an array with for..of */
for (const item of basket) {
  console.log(item);
}

console.log("=".repeat(20));

/* 
.forEach() where you provide a function to be run on each iteration.  
the function does not have a name - it is anonymous
*/
console.log("Using .forEach()");
basket.forEach(function (item) {
  console.log(item);
});
console.log("=".repeat(20));
/* forEach() with */
console.log("using .forEach() with arrow function syntax");
basket.forEach((item) => {
  console.log(item);
});

console.log("=".repeat(20));

console.log("Try using .forEach() and getting index value");
basket.forEach((item, index) => {
  console.log(`Item ${index} is ${item}`);
});

console.log("=".repeat(20));
/* and we've seen the .map function that 
   produces a new array */
console.log("use .map() to create a new array based on original")
let basket2 = basket.map((item) => {
  return item.toUpperCase();
});
console.log(basket2);
