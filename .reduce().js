/*
    .reduce() = reduces contents of an array to single value
                callback type
*/

// let numbers = [1,2,3,4,5,6,7,8,988,10];

// let sumNums = numbers.reduce(sum);
// console.log(sumNums);

// function sum(accumulator, element){
//     return accumulator + element;
// }

let grades = [75,50,90,23,56,95];

let maxGrades = grades.reduce(getMax);
let minGrades = grades.reduce(getMin);

console.log(maxGrades,minGrades);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}