/* Author: Vikash Saharan */

/* Example of Destructing */

var [i, , j] = [1, 2, 3]
console.log(i); //  1
console.log(j); //  3


/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Syntax detructing */

let a, b, rest;

[a, b] = [10, 20]; // Assignment separate from declaration
console.log(a); //  10 
console.log(b); //  20


[a, b, ...rest] = [10, 20, 30 , 40, 50, 60, 70] // Assigning the rest of an array to a variable
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50, 60, 70]


({a, b} = {a: 30, b: 40});
console.log(a); // 30
console.log(b); // 40

({a, b, ...rest} = {a:10, b:20, c: 30, d:40})  // Assigning the rest of an Object to a variable
console.log(a); // 10
console.log(b); // 20
console.log(rest); // { c:30, d:40 }

/* ------------------------------------------------------- End -------------------------------------------------------------------- */

/* Default values
A variable can be assigned a default, in the case that the value unpacked from the array is undefined. */

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Swapping variables 
Two variables values can be swapped in one destructuring expression. */

a = 1, b = 3; 

[a, b] = [b, a]

console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]]

console.log(arr[0]); // 1
console.log(arr[1]); // 3
console.log(arr[2]); // 2

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Array detructing */

const foo = ['one', 'two', 'three'];

const [red, green, yellow] = foo;

console.log(red); // one
console.log(green); //two
console.log(yellow); // three

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Fail Soft detructing */

var [x] = []
var [y = 1] = []
var z = []

console.log(x); // undefined
console.log(y); // 1
console.log(z); // []


