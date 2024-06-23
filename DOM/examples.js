
// const newH1 = document.createElement("h1");

// newH1.textContent = "I like pizza";
// newH1.id = "myH1";
// newH1.style.color = "red"
// newH1.style.textAlign = "center"


// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3])

// document.body.removeChild(newH1)
// document.body.removeChild(document.getElementById("box2"))




const newListItem = document.createElement("li");
newListItem.textContent = "coconut"

document.body.append(newListItem);
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.fontSize = "2rem";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").append(newListItem)

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange)

// document.querySelectorAll("#fruits li")[2].append(newListItem)

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2])


// document.getElementById("fruits").removeChild(document.getElementById("orange"))
