//INPUT IN JAVASCRIPT
//1. EASY WAY - window prompt
//2. PROFESSIONAL WAY - html textbox

let username;
username = window.prompt("What's your name ?")
console.log(username);

let username2;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username2}`;
}