/*
    arrow functions = a concise way to write function expressions
                      good for simple functions that used once
                      (parameters) => some code
*/

// const hello = function(){
//     console.log(`Hello`);
// }

//same as below

const hello = (name,age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old`)
};

hello('prathamesh',20);

let numbers = [1,2,3,4,5,6,7,8,9,10];

let squares = numbers.map((element) => Math.pow(element, 2));
let cubes = numbers.map((element) => Math.pow(element, 3));
let evenNums = numbers.filter((element) => element % 2 === 0);
let oddNums = numbers.filter((element) => element%2 !== 0);
let total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);