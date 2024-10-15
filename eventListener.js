/*
    event listener
        listen for specific events to create interactive web pages
        evenets : click, mouseover, mouseout
*/

// const myBox = document.getElementById("myBox");
// const button = document.getElementById("myButton")

// function changeColor(event){
//     myBox.style.backgroundColor = "tomato"
//     myBox.textContent = "OUCH ☻"
// }

// button.addEventListener("click", changeColor)

// button.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "yellow"
//     myBox.textContent = "DON'T DO IT "
// });

// button.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightgreen"
//     myBox.textContent = "Click me ☺"
// });




let myBox = document.getElementById("myBox");
let moveAmount = 1;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightgreen";
})

document.addEventListener("keydown", event => {
    let abc = event.key

    if(abc.startsWith("Arrow")){

        event.preventDefault();

        switch(abc){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }

});