/* Author: Vikash Saharan */
/* Const :- Const is for read-only variables. */

const a="a";
// TypeError: Assignment to constant variable.
//a="b"; 

/* It should be noted that const objects can still be mutated. but we can change properties value or add properties alo */
const b = {a:"a"};
b.a = "b";
b.b = "r"; // 
console.log(b);
 //  It should be noted that const objects can still be mutated.
 //b = {c:"c"};


 /* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Example */

//define MY_FAV constant and it's value of 7
const MY_FAV = 7;

//this will throw an error - Type Error: Assignment to constant variable
//MY_FAV = 20;

console.log("my favourite number is: " + MY_FAV);

// trying to redeclare constant thorw an error - Uncaught Syntax Error: Identifier 'MY_FAV' already declared
// const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
// var MY_FAV = 20; 

// SyntaxError: Identifier 'MY_FAV' has already been declared
// let MY_FAV = 20;

if (MY_FAV === 7) {
    let MY_FAV = 20;

    console.log('my favorite number is ' + MY_FAV);

    // in this statment also get error because var variable not have block scope. var variable every time global scope
    // var MY_FAV = 30;   
}

console.log("my favourite number is: " + MY_FAV);

const MY_ARRAY = [];

MY_ARRAY.push("A");

// TypeError: Assignment to constant variable.
// MY_ARRAY = ['B'];
