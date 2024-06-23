/*
    TYPE CONVERSION IN JAVASCRIPT
    change the datatype of a value to another (string, numbers, booleans)
*/

let age = window.prompt("Enter your age : ");
age = Number(age);
age = age + 1
//when age++ is used no need of type conversion here otherwise needed
console.log(age, typeof age);

let x
let y
let z
x = Number(x); 
y = String(y);
z = Boolean(z);
console.log(x, typeof x);  //NaN 'pizza' true
console.log(y, typeof y);
console.log(z, typeof z);