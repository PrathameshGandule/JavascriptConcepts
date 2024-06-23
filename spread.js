/*
    Spread operator -> ...
        allows elements in list or array to unpack 
        i.e. it makes them separate and allow s operation on them
*/

// let numbers = [1,2,3,4,5];
// let maxNum = Math.max(...numbers);
// let minNum = Math.min(...numbers)

// console.log(maxNum)  //5

// let username = "[prathamesh]";
// let letters = [...username].join("][")

// for(let letter of letters){
//     console.log(letter);
// }
// console.log(letters.length);
// console.log(letters)

// joining arrays using spread operator
let fruits = ["apple", "banana", "watermelon"]
let vegetables = ["potato", "celery", "brocolli"]

let combine = [...fruits,...vegetables,"pizza", "burger"]
for(let element of combine){
    console.log(element)
}