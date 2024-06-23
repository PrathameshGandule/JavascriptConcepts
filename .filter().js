/*
    .filter() = filters out the elements and cretaes new array
                callback type
*/

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let evens = numbers.filter(isEven);
// let odds = numbers.filter(isOdd);

// console.log(odds)

// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }

let fruits = ["apple", "watermelon", "kiwi", "orange", "pineapple", "banana"];

let greaterThan6 = fruits.filter(moreThan6);
let lowerThan6 = fruits.filter(lessThan6);

console.log(greaterThan6);
console.log(lowerThan6);

function moreThan6(element){
    return element.length >= 6;
}
function lessThan6(element){
    return element.length < 6;
}