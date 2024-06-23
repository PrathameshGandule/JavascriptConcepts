/*
    DOM = Document Object Model
          Object{} that represents the page you see in the web browsers
          and provides you with an API to interact with it.
          Web browser constructs the DOM when it loads an HTML document
          and structures all the elements in a tree-like representation
          Javascript can access the DOM to dynamically
          change the content, structure, and style of a web page
*/

document.body.style.backgroundColor = "hsl(0, 0%, 70%)"

const username = "prathamesh";

const welcomeMsg = document.getElementById("welcome-msg")

welcomeMsg.textContent += username === "" ? " guest" : " "+username;