/*
    classlists:
        element property in javascript used to interact
        with an element's list of classes (CSS classes)
        allows you to make reusable classes for many elements
        accross your webpage

    add()
    remove()
    toggle(remove if present, and if not)
    replace(oldclass, newclass)
    contains()
*/

// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled")
// myH1.classList.add("enabled")

// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });


// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"; 
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }

// });

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"; 
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }

// });




let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled")
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
        
    });
});