/*
    function expressions
        -In this concept we can pass whole function as parameter
        to any different function directly
        -A way to define functions as a value or a variable
        
        1. Callback in asynchronous operations
        2. Higher order functions
        3. Closures
        4. Event listeners
*/

setTimeout(function(){
    console.log(`Hello`);
},5000);

let numbers = [1,2,3,4,5,6,7,8,9,10];

let squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
let cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(numbers.filter(function(element){   //gives even numbers in array
    return element % 2 === 0;
}));
console.log(total);