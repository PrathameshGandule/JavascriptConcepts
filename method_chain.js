/*
    METHOD CHAINING IN JAVASCRIPT
*/

let username = window.prompt(`Enter your username :`)

//-----NO METHOD CHAINING-----

username = username.trim()
let firstletter = username.charAt(0)
firstletter = firstletter.toUpperCase();
let extra = username.slice(1)
extra = extra.toLowerCase()
username = firstletter+extra
console.log(username)

//-----METHOD CHAINING-----
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)