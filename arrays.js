/*
    ARRAY
*/

let fruits = ["apple","banana","watermelon","mango","orange"];
fruits[1] = "coconut"
fruits.push("coconut")
fruits.pop()
fruits.unshift("coconut")
fruits.shift()
let num = fruits.length;
let index = fruits.indexOf("banana");
console.log(fruits);
console.log(index)

// displays elements
for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}
fruits.sort()
fruits.sort().reverse()
// for each loop
for(let fruit of fruits){
    console.log(fruit)
}