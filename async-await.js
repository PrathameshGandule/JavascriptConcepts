/*
    async/await:
        async = it makes a function to return a promise
        await = makes an async function wait for a promise

        allows you to write asynchronous codein a synchronous manner
        Async doesn't have resolve pr reject parameters
        everything after await is replaced in an event queue
*/

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

async function doChores(){
    try{
        const walkTheDogResult = await walkTheDog();
        console.log(walkTheDogResult);
    
        const cleanTheKitchenResult = await cleanTheKitchen();
        console.log(cleanTheKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You completed all chores!!!")
    }
    catch(error){
        console.error(error)
    }
}

doChores();