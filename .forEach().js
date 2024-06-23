/*
    forEach() = method used to iterate over every element 
                an array and apply a callback function to each element

                array.forEach(callback);
                element , index, array are provided
*/

// let numbers = [1,2,3,4,5];

// numbers.forEach(square);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

let fruits = ["apple", "banana", "coconut", "orange"];

fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}