/*
    ternary operator = shortcut ro if{} and else{} statements
                       helps to assign variables based on conditions
                       condition ? codeIfTrue : codeIfFalse;
*/

let age = window.prompt(`You're age ?`);
let message = age >= 18 ? `You're a adult` : `You're a Minor`
console.log(message);

let time = 12;
let greeting = time<12 ? `Good Morning` : `Good Afternoon`;
console.log(greeting)

let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are not student";
console.log(message2)

let purchaseAmount = 110;
let discount = purchaseAmount >= 100 ? purchaseAmount * 0.1 : 0;
console.log(`You're total amount is $${purchaseAmount - discount}`);