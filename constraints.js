/*
    CONSTANTS IN JAVASCRIPT
    const keyword = a variable that kant be changed
*/

const pi = 3.14159
let radius
let circumference

radius = window.prompt("What is the Radius ?")
circumference =  2 * pi * radius
console.log(`Circumference of the circle is ${circumference}`)

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = 2 * pi * radius
    document.getElementById("result").textContent = circumference
}