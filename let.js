/* Author: Vikash Saharan */
/* let: The let statement declares a block scope local variable, optionally initializing it to a value. 
Just like const the let does not create properties of the window object when declared globally (in the top-most scope). */

/* Difference var and let */

function varTest() {
    var x = 1;
    {
        var x = 2;
        console.log(x);  // 2
    }
    console.log(x); // 2
}

function letTest() {
    let y = 1;
    {
        let y = 2;
        console.log(y); // 2
    }
    console.log(y); // 1
}

varTest();
letTest();

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* However, it does not assign anything to window */

let mm="go"; // global scope
var i="able"; // global scope

//console.log(window.mm); 
//console.log(window.i);

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* It is not possible to redeclare a variable using let: */

let me="foo";
//let me="bar";   // Identifier 'me' has already been declared
console.log(me);


var mem = "foo";
var mem = "bar"; 
console.log(mem) 


