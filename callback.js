/*
    callback = a function that is passed as an argument
               to another function

               used to handle asynchronous operations:
               1. Reading a file
               2. Networking requests
               3. Interacting with database

               "Hey when you're done, call this next"
*/

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}
function wait(){
    console.log("wait");
}

// sum(displayPage, 56, 578546);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }
// function displayPage(result){
//     document.getElementById("resultPage").textContent = result
// }