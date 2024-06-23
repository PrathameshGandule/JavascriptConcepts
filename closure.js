/*
    closure
        a function declared inside of another function
        the inner variable has access to varibles and
        scope of the outer function
        allow for private variables and state maintenance
        used frequently in JS framework : React, Angular, Vue
*/

// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();


function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        console.log(`Counter at currently ${count}`);
    }
    return {increment,getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.getCount();

