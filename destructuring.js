/*
    destructuring
        extract values from arrays and objects
        then assign them to a variable in a convenient way
        [] = to perform array destructuring
        {} = to perform object destructuring
*/

/* ----------EXAMPLE 1----------
   SWAP THE VALUES OF 2 VARIABLES */

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/* ----------EXAMPLE 2----------
   SWAP 2 ELEMENTS IN AN ARRAY   */

// const colors = ["red", "orange", "violet", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

/* ----------EXAMPLE 3----------
   ASSIGN ARRAY ELEMENTS TO VARIABLES  */

// const colors = ["red", "orange", "violet", "black", "white"];

// const [firstColor, secondColor, ...extraColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(extraColor);

/* ----------EXAMPLE 4----------
   EXTRACT VALUES FROM OBJECTS     */

const person1 = {
    firstName : "SpongeBob",
    lastName : "SquarePants",
    age : 30,
    job : "fry cook"
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age : 35
}

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

/* ----------EXAMPLE 5----------
   DESTRUCTURE IN FNCTION PARAMETERS  */

// use above two objects for this from Ex. 4

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`job : ${job}`);
}

displayPerson(person1);
displayPerson(person2);