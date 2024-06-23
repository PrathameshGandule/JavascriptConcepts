/*
    Rest parameters -> (...rest)
        it allows a function to work with multiple number of
        parameters at a time by bundling them into an array
        it is opposite of spread
*/

// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods
// }

// let food1 = "pizza";
// let food2 = "hamburger";
// let food3 = "sushi";
// let food4 = "pasta";
// let food5 = "chocalate_milkshake";

// openFridge(food1, food2, food3, food4, food5);
// let array = getFood(food1, food2, food3, food4, food5);
// console.log(array)

// function sum(...numbers){
//     let result = 0;
//     for(let num of numbers)
//         result += num;
//     return result;
// }

// let total = sum(1,2,8,6,1,3,7,9,5,5,3,2,1,55,6686,9,8);
// console.log(`Your total is ${total} Rs.`);

//combining strings together
function combineStrings(...strings){
    return strings.join(" ");
}
let fullName = combineStrings("Mr.", "Prathamesh", "Gandule", "IV");
console.log(fullName);