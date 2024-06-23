/*
    nodelist:
        static collection of html elements by (id, class, element)
        can be treated by using querySelectorAll()
        similar to an array, but no (map, filter, reduce) forEach - yes
        nodelist won't update on it's own to reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightgreen"
//     button.textContent += "😂" 
// });

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton)

buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato"
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(240, 100%, 60%)"
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(240, 100%, 70%)"
//     });
// });

buttons.forEach(button => {
    button.addEventListener("click", event => {
        // document.body.removeChild(button);
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");   
        console.log(buttons)     
    });
});