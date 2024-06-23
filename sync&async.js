/*
    synchronous
        Executes line by line in sequential manner
        code that waits for operation to complete

    asynchronous
        allows multiple operations to be run concurrently without waiting
        doesn't block the execution flow and allows the program to continue
        (I/O operations, network requests, fetching data)
        handled with : callbacks, async/await, promises
*/

function func1(callback){
    setTimeout(() => {console.log("task 1");callback();}, 3000);
}

function func2(){
    console.log("task 2");
    console.log("task 3");
}

func1(func2);


