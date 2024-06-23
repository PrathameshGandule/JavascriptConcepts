/*
    FUNCTIONS IN JAVASCRIPT
*/

function add(a, b){return a+b}
function sub(a, b){return a-b}
function multiply(a, b){return a*b}
function div(a, b){return a/b}
let x = window.prompt(`Enter value of x`)
let y = window.prompt(`Enter value of y`)
let choice = window.prompt(`Enter choice 1.add 2.sub 3.multiply 4.div`)
// switch(choice){
//     case 1:
//         console.log(`${x} + ${y} = ${add(x,y)}`)
//     case 2:
//         console.log(`${x} - ${y} = ${sub(x,y)}`)
//     case 3:
//         console.log(`${x} * ${y} = ${multiply(x,y)}`)
//     case 4:
//         console.log(`${x} / ${y} = ${div(x,y)}`)
// }
if(choice == 1){
    console.log(`${x} + ${y} = ${add(x,y)}`)
}
else if(choice == 2){
    console.log(`${x} - ${y} = ${sub(x,y)}`)
}
else if(choice == 3){
    console.log(`${x} * ${y} = ${multiply(x,y)}`)
}
else if(choice == 3){
    console.log(`${x} / ${y} = ${div(x,y)}`)   
}
else{
    window.alert(`Enter valid choice`)
}