//Chapter 1: Introduction to JavaScript
console.log("Hello, World! This is script1.js");

//Chapter 2: Variables and Data Types
var x = 10;
var x = 20;
console.log(x); // Output: 20

let num = [19, 45, 42, 8, 15];
let even = 0;
let odd = 0;

for (let item in num) {
    if (num[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even numbers count: " + even); // Output: Even numbers count: 3
console.log("Odd numbers count: " + odd); // Output: Odd numbers count: 2

// approch 2

let evennumber = num.filter(function (item, index) {
        if (item % 2 === 0) {
            return true;
        }
        }). length;
 
    