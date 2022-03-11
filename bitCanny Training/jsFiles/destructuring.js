// destructuring assignment makes possible to unpack values from array or object into distinct variables

let a, b;
[a, b] = [10, 20];

console.log(a, b);          // assigns  a=10  b=20

// if we have to store multiple values in a variable from an array

// [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// OBJECT DESTRUCTURING

// ({ a, b, c } = { a: 10, b: 20, c: 30, d: 40, e: 50 })
// console.log(a, b, c)            // 10 20 30
    
    
    
({ a, b, ...c } = { a: 10, b: 20, c: 30, d: 40, e: 50 })
console.log(a, b, c)            // 10 20 c{c:30, d:40, e:50}


const fruits = ['Apple', 'Banana', 'Mango'];

[a, b, c] = fruits;

console.log(a);
console.log(b);
console.log(c);

const laptop = {
    company: "Dell",
    model: "Inspiron",
    price: "123",
    start: function () { console.log("Started") }
}

const { company, model, price } = laptop;
console.log(company, model, price);
// console.log(laptop);

