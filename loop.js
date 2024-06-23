/*
    WHILE LOOP = repeat something until some condition checks(we don't know no. of times it will execute)
*/

let username
while(username === "" || username===null){
    username = window.prompt("Enter your name :");
}
console.log(`Hello ${username}`)

let loggedIn = false
let username2,password;
while(!loggedIn){
    username2 = window.prompt(`Enter your username2 :`)
    password = window.prompt(`Enter your password :`)
    if(username2 === "myUsername" && password === "myPassword"){
        loggedIn = true
        console.log(`You are logged In`)
    }
    else{
        console.log(`Invalid credentials !!! Try again`)
    }
}

/*
    FOR LOOP = repeat something limited times
*/

for(let i=1 ; i<=20 ; i++){
    if(i==13)
        break;
    console.log(i);
}

// for each loop

let fruits = ["apple", "watermelon", "coconut", "banana", "lichi", "kiwi"];
for(let fruit of fruits){
    console.log(fruit)
}