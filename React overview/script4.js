// calculator app 

// simple finction to add two numbers
function add(a, b) {
    return a + b;
}   

// simple function to subtract two numbers
function subtract(a, b) {
    return a - b;
}   

// simple function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// simple function to divide two numbers    
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}   
// example usage of the calculator functions
let num1 = 10;
let num2 = 5;
console.log("Addition: " + add(num1, num2)); // Output: Addition: 15
console.log("Subtraction: " + subtract(num1, num2));
// Output: Subtraction: 5
console.log("Multiplication: " + multiply(num1, num2)); // Output: Multiplication: 50
console.log("Division: " + divide(num1, num2)); // Output: Division: 2
console.log("Division by zero: " + divide(num1, 0)); // Output: Division by zero: Error: Division by zero is not allowed.

// arrow function syntex 
const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;  
const divideArrow = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}   

// example usage of the arrow functions
console.log("Addition (Arrow): " + addArrow(num1, num2));
console.log("Subtraction (Arrow): " + subtractArrow(num1, num2)); // Output: Subtraction (Arrow): 5
console.log("Multiplication (Arrow): " + multiplyArrow(num1, num2));    
console.log("Division (Arrow): " + divideArrow(num1, num2)); // Output: Division (Arrow): 2

