// ES5 functions

function greet() {
    console.log("Hello greet");
}

greet();



function greet1(name) {
    console.log("Hello greet1" + " " + name);
}

greet1("Prem");


function greet2(name, lastName) {                       //parameters received
    console.log("Hello, " + name + " " + lastName);
}

greet2("Prem", "Jaiswal");      //arguments passed



//Comparison between normal functions and arrow functions


// normal function

function result(num1, num2) {
    return num1 + num2;
}


// ES6 arrow functions

//example1
let result1 = (num1, num2) => {
    return num1 + num2;
}

let result2 = (num1, num2) => num1 + num2;       // everything after the arrow is assumed to be returned (SHORTER SYNTAX)


// example2
let square = num => num * num;          // if there is only one argument passed then we can ommit parenthesis


//Arrow functions default parameters
//we can set default parameters, if we don't give a value to the parameter then the default value will be added to the parameter
const greeting = (name = "Anonymous") => console.log("Hello " + name);

greeting();
greeting("Bit Canny");






// es5 function
function randomNumber() {
    return Math.floor(Math.random() * 100);
}

let random_number = randomNumber();
console.log(random_number);






// es6 function
let randomNumber2 = () => {
    return (Math.floor(Math.random() * 10));
}

let a = randomNumber2();
console.log(a);










// es5 and es6 functions

document.addEventListener('click', function () {
    console.log("Clicked");
})

document.addEventListener('click', () => console.log("clicked"));







//Not Clear

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }

// function printNameArrow() {
//     setTimeout(() => {
//         console.log("Arrow: " + this.name)
//     }, 1000)
// }

// function printNameFunction() {
//     setTimeout(function () {
//         console.log("Function: " + this.name);
//     }, 1000)
// }


// let person = new Person('Bob');
// person.printNameArrow();
// person.printNameFunction();
// console.log(this.name)




class Car{
    constructor(brand) {
        this.carName = brand;
    }
}


myCar = new Car("Mercedes");