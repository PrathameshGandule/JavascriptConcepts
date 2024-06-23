/*
    Variable Scope
*/

//local variales have priority over global variables

console.log(`Hello World`)
let x = 3;
function func1(){
    let x=2;
    console.log(x);
}
func1();