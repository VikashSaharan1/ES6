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
/* Unpacking values from a regular expression match */
function parseProtocol(url) {
const parsedUrl =  /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

    if(!parsedUrl) {
        return false;
    }

    console.log(parsedUrl); //

    const [, protocol, fullhost, fullpath] = parsedUrl;
    return protocol;
}
console.log(parseProtocol("https://www.google.co.in/"));
/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Ignoring some returned values */
function f() {
    return [1, 2, 3];
}
const[aa, ,bb] = f();
console.log(aa); // 1
console.log(bb); // 3

[,,] = f() // ignore all values
/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Object destructing */

const o = {p: 42, q: true}

const {pp, qq} = o

console.log(pp);

console.log(qq);

/* Assignment without declaration */
let m, n;

({m, n} = {m: 10, n: true})

console.log(m);
console.log(n);

/* Default value */
const {mm = 2, nn = 4} = {mm:10}

console.log(mm); // 10
console.log(nn); // 4

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Unpacking fields from objects passed as function parameter */

const user = {
    id: 42,
    displayName: "jdoe",
    fullname: {
        firstname: "John",
        lastname: "Doe"
    }
};

function userId({id}) {
     return id;
}

function whois({displayName, fullname: {firstname: name}}) {
    return `${displayName} is ${name}`;
}

console.log(userId(user));  // 42
console.log(whois(user));   // jdoe is john

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Nested Object and array destructing */

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
}

let {
    title: englishTitle,  // rename
    translations: [
        {
            title: localeTitle // rename
        }
    ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* For of iteration and destructuring */

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 33
    }
]
;

for(const {name: n, family: {father:f}} of people) {
        console.log('Name: '+ n + ', Father' +f);
}
//  Name: Mike Smith, FatherHarry Smith
// Name: Tom Jones, FatherRichard Jones

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Fail Soft detructing */

var [x] = []
var [y = 1] = []
var z = []

console.log(x); // undefined
console.log(y); // 1
console.log(z); // []


