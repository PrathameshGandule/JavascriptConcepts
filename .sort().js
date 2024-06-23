/*
    sort()
        method used to sort elementsof an array in place
        sorts elements as strings in lexicographical order not alphabetical
        lexicorgraphically = (alphabet + number + symbol) as strings
*/

let fruits = ["apple", "banana", "watermelon", "coconut"];
fruits.sort();
console.log(fruits)

let numbers = [1,10,9,8,5,3,6,2,4,7];
numbers.sort((a, b) => b - a);
console.log(numbers)

const people = [{name : "spongebob", age : 30, gpa : 3.0}, 
                {name : "patrick", age : 37, gpa : 1.5}, 
                {name : "squidward", age : 45, gpa : 2.5}, 
                {name : "sandy", age : 25, gpa : 4.0}];

people.sort((a, b) => a.gpa - b.gpa);   //for nums
people.sort((a, b) => a.name.localeCompare(b.name));   //for names(strings)
people.sort()
console.log(people)