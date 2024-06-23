/*
    String manipulation in javascript
*/

let username = 'Prathamesh'
let anothername = '     ashutosh'

console.log(username.charAt(2))  //a
console.log(username.indexOf('m'))  //6
console.log(username.lastIndexOf('a')) //5
console.log(username.length)  //10
console.log(anothername)
console.log(anothername.trim())  //trims trailing spaces
console.log(username.toUpperCase())
console.log(username.toLowerCase())
console.log(username.repeat(4))

let result1 = username.startsWith(' ');
let result2 = username.endsWith(' ');
let result3 = username.includes(' ');
console.log(result1,result2,result3)

let mobilenumber = '123-456-7890'
mobilenumber = mobilenumber.replaceAll('-','_')  //123_456_7890
mobilenumber = mobilenumber.padStart(16,'0')   //0000123_456_7890
mobilenumber = mobilenumber.padEnd(16,'0')   //123_456_78900000
console.log(mobilenumber)
