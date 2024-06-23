/*
    error
        An object created that represents a problem that occurs
        occurs often wit user input or establishing a connection 

    try{} : encloses that might cause error
    catch{} : catch and handle any error thrown from try()
    finally{} : (optional) usually used for closing task or end task like realease
                resources , close files etc.
*/

// try{
//     console.log(x);
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     console.log("THIS ALWAYS EXECUTES");
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
// }

// console.log("you've reached end");


try{
    const dividend = window.prompt("Enter dividend");
    const divisor = window.prompt("enter divisor");

    if(divisor == 0)
        throw new Error("You can't divide by zero");

    if(typeof dividend !== "number" || typeof divisor !== "number")
        throw new Error("Enter a valid number");

    const result = dividend / divisor;
    console.log(result)
}

catch(error){
    console.error(error);
}

finally{
    console.log("this always executes");
}

console.log("this is the end");

