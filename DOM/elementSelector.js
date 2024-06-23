/*
    element selctor
        Methods used to target and manipulate HTML elements
        They allow you to select one or nultiple HTML elements
        from the DOM (Document object model)

    1. document.getElementById()          // ELEMENT OR NULL
    2. document.getElementsByClassName()  // HTML COLLECTION
    3. document.getElementsByTagName()    // HTML COLLECTION
    4. document.querySelector()           // ELEMENT OR NULL
    5. document.querySelectorAll()        // NODELIST
*/

// const myHeading = document.getElementById("my-heading");

// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading)

// let fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "red";
// });

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }


// const h4elements = document.getElementsByTagName("h4")
// const liElements = document.getElementsByTagName("li");

// h4elements[0].style.backgroundColor = "yellow"
// for(let h4element of h4elements){
//     h4element.style.backgroundColor = "yellow"
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen"
// }

// Array.from(h4elements).forEach(h4element => {
//     h4element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen"
// });


// const element = document.querySelector(".fruits");   //selects first matching element

// element.style.backgroundColor = "yellow" 


// const fruits = document.querySelectorAll(".fruits");   //it returns nodelist which have builtin methods
// const foods = document.querySelectorAll("li");
// fruits[2].style.backgroundColor = "yellow"; 
// foods[2].style.backgroundColor = "lightgreen"

// fruits.forEach(fruit => {
//     fruit.style.backgroundColor = "lightblue";
// })