/* Author: Vikash Saharan */
/* Spread operators:- allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements */

/* Example of Spread */

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1,2,4];

console.log(sum(...numbers)); // 7 

console.log(sum.apply(null, numbers)) // 7 

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Spread in function calls */
/* Replace apply() */
/* It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function. */

function myFunction(x, y, z) {}
var args = [0, 1, 2];


myFunction.apply(null, args);   // x=0, y=1, z=2
// OR 
myFunction(args);    // x=0, y=1, z=2

// Any argument in the argument list can use spread syntax and it can be used multiple times.
function myFunction(v, w, x, y, z) {}

var args = [0, 1];

myFunction(-1, ...args, 2, ...[3]);   // v=-1, w=0, x=1, y=2, z=3


/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Apply for new */
var datefields = [1970, 0, 1]
var d = new Date(...datefields);

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Spread in array literals */

var parts = ['shoulders', 'knees'];

var lyrics = ['head', ...parts, 'and', 'toes'];   
console.log(lyrics); // [ 'head', 'shoulders', 'knees', 'and', 'toes' ]
var lyrics = ['head', ... parts, 'and', 'toes']; 
console.log(lyrics);  // [ 'head', 'shoulders', 'knees', 'and', 'toes' ]

/* copy an array */
var arr = [1, 2, 3]
console.log(arr.slice()); // [ 1, 2, 3 ]
var arr2 = [...arr];   // like arr.slice();
console.log(arr2); // [ 1, 2, 3 ]
/* multidimensional arrays */
var a = [[1], [2], [3]];
var b = [...a];
console.log(b); // [ [ 1 ], [ 2 ], [ 3 ] ]

b.shift().shift(); 
console.log(b); // [ [ 2 ], [ 3 ] ]

/* A better way to concatenate arrays */
/* earlier ways */
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = arr1.concat(arr2);
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

/* Array.prototype.unshift() is often used to insert an array 
of values at the start of an existing array. Without spread syntax this is done as: */

var arr1 = [0, 2, 5];
var arr2 = [7, 12, 14];
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); //  [ 7, 12, 14, 0, 2, 5 ]

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Spread in object literals */

var obj1 = { foo: 'bar', x: 42}
var obj2 = { foo: 'baz', y: 13}

var clonedObj = {...obj1}
console.log(clonedObj);   // Object { foo: "bar", x: 42 }

var mergedObj = {...obj1, ...obj2}
console.log(mergedObj); // Object { foo: "baz", x: 42, y: 13 }



