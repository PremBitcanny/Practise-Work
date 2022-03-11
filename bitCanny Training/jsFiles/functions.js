var myCar = {
    company: 'BMW',
    model: 'e6',
    year: 2015
}
console.log(myCar);

let a, b;

a = myCar.company;

function myfunc(obj) {
    obj.company = 'Mercedes';
}

b = myfunc(myCar);

console.log(a);
console.log(b);
console.log(myCar);



//unnamed functions

const square = function (num) {
    return num * num;
}


// named functions
// This helps the function to refer itself

const factorial = function fact(n) {
    return n < 2 ? 1 : n * fact(n - 1)
}

let res = factorial(5);
console.log(res);


