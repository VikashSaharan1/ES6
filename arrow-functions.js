/* Author: Vikash Saharan */
/* get Length Example ES5 and ES6 */
const materials =  [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
/* ES5 Example get length of every string */
var a = [];
materials.filter(function(material){
    a.push(material.length);
});
console.log(a); // [ 8, 6, 7, 9 ]
a = materials.filter(function(material){
    console.log( material.length);
    return material.length;
});
console.log(a); // [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium' ]

/* ES6 Example get  length of every string */
console.log(materials.map(material => material.length));   // [ 8, 6, 7, 9 ]

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

var simple = a => a > 15 ? 15: a;
console.log(simple(16))
console.log(simple(10))


let max = (a, b) => a > b ? a : b;
console.log("max(10, 15) = " + max(10, 15));

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a+b);
console.log("sum[5, 6, 13, 0, 1, 18, 23] = " + sum);

var evenArr = arr.filter(a => a % 2 == 0);
console.log("EvenArr[5, 6, 13, 0, 1, 18, 23] = [" + evenArr + "]");

var oddArr = arr.filter(a => a % 2 == 1);
console.log("oddArr[5, 6, 13, 0, 1, 18, 23] = [" + oddArr + "]");

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Set timeout Example ES5 and ES6 */

/* ES5 */
setTimeout(function() {
    console.log("Hello1");
}, 3000);

setTimeout(function() {
    console.log("Hello2");
}, 0);

setTimeout(function() {
    console.log("Hello3");
}, 1000);

/* ES6 */
setTimeout(() => {
    console.log("Hello4");
}, 3000);

setTimeout(() => {
    console.log("Hello5");
}, 0);

setTimeout(() => {
    console.log("Hello6");
}, 1000);

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Use of the new operator */
/* Arrow functions cannot be used as constructors and will throw an error when used with new. */
var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Use of prototype property */
/*Arrow functions do not have a prototype property.*/
console.log(Foo.prototype); //undefined

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Use of the yield keyword */
/*The yield keyword may not be used in an arrow function's body*/

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Function body */
/* Arrow functions can have either a "concise body" or the usual "block body".In a concise body, only an expression is specified, 
which becomes the implicit return value. In a block body, you must use an explicit return statement. */

var func = x => x * x; // concise body syntax, implied "return"
var func = (x) => { return x * x;} // with block body, explicit "return" needed

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Returning object literals */
/* Keep in mind that returning object literals using the concise body syntax params => {object:literal} will not work as expected. */

var func = () => {foo: 1}; // Calling func() returns undefined!
console.log("97 line = " + func())

//var func = () => { foo: function() {}}  // SyntaxError: function statement requires a name

var func = () => { foo: function test() {return 5;}}  // Calling func() returns undefined!
console.log("102 line = " + func())

var func = () => ({foo: 1}) // correct example of return object with arrow function
console.log("105 line = " + func()) // 105 line = [object Object]
console.log("106 line = " + func().foo) // 106 line = 1

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Parsing order */

let callback;

callback = callback || function() {} // ok


// callback = callback || () => {}; // syntax error


callback = callback || (() => {});