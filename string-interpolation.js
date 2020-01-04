/* Author: Vikash Saharan */

/* Example of string interpolation */

var name = "Bob", time = "today"
var multiline = `This 
Line
Multiline
Steps
`

console.log(multiline); // backtrick support multiline string while "" not support without concatination

console.log(`Hello ${name}, how are you ${time}`);  // Hello Bob how are you today 

