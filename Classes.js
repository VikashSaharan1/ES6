/* Author: Vikash Saharan */

/* Example of public properties access outside */
class Rectangle{
    a = 'test';
}
console.log(Rectangle.a); // undefined
let r = new Rectangle();
console.log(r.a); // test

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Example of publicmethod access outside */

class Rectangle1{
    a = 'test';
    getA() {
        return this.a;
    }
}
console.log(Rectangle1.a); // undefined
let r1 = new Rectangle1();
console.log(r1.a); // test

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* class with constructor */

class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    } 

    getArea() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

let r2 = new Rectangle2(10, 10);
console.log(r2.calcArea()); // print 100

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* static methods const */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.distance);  //undefined
console.log(p2.distance); //undefined
console.log(Point.distance(p1, p2)); // 7.0710678118654755


/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Public field declarations */

class Rectangle3 {
    height = 0;
    width;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* private field declarations */
// Note: Might be your editor show error but latest chrome(Version 79.0.3945.88 (Official Build) (64-bit)) tested

class Rectangle4 {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    getArea() {
        return this.#height * this.#width;
    }
}

let r4 = new Rectangle4(2,2);
console.log(r4.getArea()); // print 4


/* ------------------------------------------------------- End -------------------------------------------------------------------- */
/* Sub classing with extends   */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

let d = new Dog('Sheru');
d.speak(); // Sheru barks.





