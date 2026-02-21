//javascript basic 

/*1) var 
     -> var is function scoped, which means it is accessible within the function it is declared in.
     -> var can be redeclared and updated within its scope.
     -> var declarations are hoisted to the top of their scope, but not initialized until the code is executed.  
2) let
     -> let is block scoped, which means it is accessible only within the block it is declared in.
     -> let cannot be redeclared within the same scope, but can be updated.
        -> let declarations are hoisted to the top of their block, but not initialized until the code is executed.
3) const
     -> const is block scoped, similar to let, but it cannot be updated or redeclared.
     -> const declarations must be initialized at the time of declaration.
     -> const declarations are hoisted to the top of their block, but not initialized until the code is executed. 
*/



//object 

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
/*key: value pair
name: "John" -> key is name and value is John   
age: 30 -> key is age and value is 30
city: "New York" -> key is city and value is New York
*/

//accessing object properties
console.log(person.name);

let peroduct = [
    {
        name: "Laptop",
        price: 1000,}


]

/* above is an array of objects, where each object represents a product with properties name and price.
name: "Laptop" -> key is name and value is Laptop   
price: 1000 -> key is price and value is 1000
*/

//accessing object properties in an array
console.log(peroduct[0].name); // Output: Laptop

// How can we restric user to  restric to array only for integer value

let arr = [1, 2, 3, 4, 5];  
arr.push(6); // This will work, as 6 is an integer
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
arr.push("Hello"); // This will work, but we want to restrict it to integers only
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, "Hello"]

// use type script to restrict the array to only accept integer values. TypeScript is a superset of JavaScript that adds static typing to the language.

// In TypeScript, you can define an array that only accepts integer values like this:
 


