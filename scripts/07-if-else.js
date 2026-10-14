let temperature = 68;
/* units here are degrees Fahrenheit, F */

if (temperature >= 85) {
  console.log("It's hot. Consider shorts.");
} else if (temperature >= 65) {
  console.log("It's mild. A t-shirt may be fine.");
} else if (temperature >= 45) {
  console.log("It's cool. You might want a jacket.");
} else {
  console.log("It's cold. Consider taking a coat.");
}

/* difference between 
=   this assigns, will NEVER compare
=== compares using strict equality  
==  loose equality, based on coercion of types for comparison
*/
console.log('Hello' === 'HELLO');
console.log('Hello' === 'Hello');
console.log(0 == false);
console.log(0 === false);
console.log(1 == true);
console.log(1 === true);