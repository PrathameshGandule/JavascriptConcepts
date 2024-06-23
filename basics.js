console.log(`Hello`)
console.log(`I love Pizza`)

window.alert(`This is an alert!`)
window.alert(`I love pizza`)

//This is a comment
/*
Tis 
a
comment
*/
//This is a demonstration of changing html content by using following code

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `lorem ipsum gracias pizza pixar`;

//variable
//declared using - let a = {value}

let x = 123;
console.log(x);

//NUMBERS

//datatypes
let age = 25;
let price = 10.99;
let gpa = 2.1;

//formatting in javascript
console.log(`Your age is ${age} years`);
console.log(`Prize of the crossiant is ${price} dollars`);
console.log(`Your gpa is ${gpa}`);

//typeof

console.log(typeof age);
console.log(typeof price);

//STRINGS

let firstName = "Bro369";
let favouriteFood = "Samosa";
let email = "pdg251104@hmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your favourite food is ${favouriteFood}`);
console.log(`Your email is ${email}`);

//BOOLEANS

let online = true;
let forSale = false;

console.log(`Bro is online : ${online}`)
console.log(`Is this car for sale : ${forSale}`)

let fullName = "Prathamesh dhanaji Gandule"
let age2 = 19
let student = true

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `You are enrolled ${student}`