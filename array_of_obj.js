const fruits = [{name : "apple", color : "red" , calories : 45}, 
                {name : "coconut", color : "brown" , calories : 120}, 
                {name : "kiwi", color : "green" , calories : 46}, 
                {name : "banana", color : "yellow" , calories : 112}, 
                {name : "pineapple", color : "yellow" , calories : 45}]

console.log(fruits[2].name);
console.log(fruits[2].calories);

fruits.push({name : "grapes", color : "purple", calories : 23});
// fruits.pop();
// fruits.splice(1,2);

console.log(fruits)

// ---------forEach()---------
fruits.forEach(fruit => console.log(fruit.name))

// ---------map()----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames)
console.log(fruitColors)

// ---------filter()----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalorie = fruits.filter(fruit => fruit.calories <= 100);
console.log(yellowFruits[0].name, yellowFruits[1].name);
console.log(lowCalorie);

//----------reduce()-----------
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(minFruit);
