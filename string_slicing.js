/*
    STRING SLICING IN JAVASCRIPT 
    creating another substring using a string
*/

let username = '     Prathamesh Dhanaji Gandule             '
username = username.trim()

let firstName = username.slice(0,username.indexOf(' '))
let middleName = username.slice(username.indexOf(' ')+1,username.lastIndexOf(' '))
let lastName = username.slice(username.lastIndexOf(' ')+1)

console.log(firstName)
console.log(middleName)
console.log(lastName)

const email = 'prathameshgandule1@gmail.com'
let username2 = email.slice(0,email.indexOf('@'))
let extension = email.slice(email.indexOf('@')+1)
console.log(username2)
console.log(extension)