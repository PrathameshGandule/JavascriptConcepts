/*
    callback hell:
        situation in javascript where callbacks are nested inside callbacks
        to the degree where the code is difficult to read.
        It's old pattern to handle asynchronous code
        use promises + async/await to avoid callback hell
*/

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 completed")
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completed")
        callback();
    }, 1500)
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completed")
        callback();
    }, 3000)
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 completed")
        callback();
    }, 4000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("all tasks completed")
            })
        })
    })
})