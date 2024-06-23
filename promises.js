/*
    promises:
        an object that manages asynchronous operations
        wrap a promise around asynchronous code
        "I promise to return a value";
        PENDING -> RESOLVED OR REJECTED
        new promises ((resolve, reject) => {asynchronous code})

    DO THE CHORES IN ORDER

    1. WALK THE DOG
    2. CLEAN THE KITCHEN
    3. TAKE OUT TRASH
*/    

// function walkTheDog(callback){
//     setTimeout(() => {
//         console.log("You walked the dog 🐕")
//         callback();
//     }, 1500)
// }

// function cleanTheKitchen(callback){
//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹")
//         callback();
//     }, 2500)
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You took out the Trash 🗑️");
//         callback();
//     }, 500);
// }

// walkTheDog(() => {
//     cleanTheKitchen(() => {
//         takeOutTrash(() => console.log("All tasks completed woohoo 🥳"))
//     })
// })



function walkTheDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkedOutDog = true;

            if(walkedOutDog){
                resolve("You walked the dog 🐕")
            }
            else{
                reject("Doesn't walked the dog")
            }

        }, 1500)
    })
}

function cleanTheKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedTheKitchen = true;

            if(cleanedTheKitchen){
                resolve("You cleaned the kitchen 🧹")
            }
            else{
                reject("You didn't clean kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const tookOutTrash = false;

            if(tookOutTrash){
                resolve("You took out the Trash 🗑️");
            }
            else{
                reject("didn't took out trash")
            }
        }, 500);
    })
}

walkTheDog().then(value => {console.log(value); return cleanTheKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
            .then(value => {console.log(value); console.log("All tasks done")})
            .catch(error => {console.error(error)});