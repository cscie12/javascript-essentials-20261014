/* use "let" to declare a variable */
let courseCode = "CSCI E-12";
let courseTerm = "Fall 2026";
let courseTitle = "Fundamentals of Web Application Development";

console.log(courseTitle);

/* you can concatenate strings with the + operator */
let message = courseCode + ", " + courseTitle + ", " + courseTerm;
console.log(message);

/* but mostly you'll see template literal used for this.
Template literals use "backticks". 
Backticks share a keyboard key with the ~ character,
   which is often to the left of the "1/!" key" and under the escape.
   backticks ` are NOT single quotes '
   */

let message2 = `${courseCode}, ${courseTitle}, ${courseTerm}`;
console.log(message2);

let message3 = `The course ${courseTitle} is offered in the ${courseTerm} term.`;
console.log(message3);

/* template literals - backticks `` and values in ${} are placeholders for substitution of values or evaluations */

console.log(`Two to the tenth power (2^10) is ${2**10}`);

/* you may see "var" insteald of "let". 
   var works, but let is preferred
*/
var schoolName = "Harvard Extension";
console.log(schoolName);

/* what about "const"?  it can't be changed by another assignment statement;
   this signals intent that it won't change */
const YEAR_FOUNDED = 1636;
/* once const variable is assigned, you can't change it */
/* can't do this:
YEAR_FOUNDED = 1638;
*/
console.log(YEAR_FOUNDED);

/* what if I refer to something that isn't defined? */
//console.log(message99);

/* why courseTitle and not course-title but course_title ? */
//let course_title = "CS 101";
//let course-title = "CS 102";

