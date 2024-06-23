/*
    .map() = accepts a callback and applies a function
             to each element of an array and returns a 
             new array
*/

// let numbers = [1,2,3,4,5];

// let cubedNums = numbers.map(cubed);
// cubedNums.forEach(displayConsole);

// console.log(cubedNums);

// function double(element){
//     return element * 2;
// }

// function squared(element){
//     return Math.pow(element, 2);
// }

// function displayConsole(element){
//     console.log(element);
// }

// function cubed(element){
//     return Math.pow(element, 3);
// }

/* date formatting */

const dates = ['2024-5-10', '2023-8-9', '2024-8-1'];
let formatedDates = dates.map(formatDate);
formatedDates.forEach(displayConsole);

function formatDate(element){
    let parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

function displayConsole(element){
    console.log(element);
}