/*
    JSON : (JavaScript Object Notation) data-interchange format
           Used for exchanging data between a server and a web application
           JSON files {key : value} OR [value1, value2, value3]
           
           json.stringify() = converts a JS object to a JSON string
           json.parse() = converts a JSON string to a JS object
*/

// const jsonName = `["spongebob", "patrick", "squidward", "sandy"]`;

// const jsonPerson = `{"name" : "spongebob","age" : 34,"isEmployed" : true,"hobbies" : ["jellyfishing", "cooking", "timepassing"]}`

// const jsonPeople = `[{"name" : "spongebob","age" : 34,"isEmployed" : true},
//                      {"name" : "patrick","age" : 40,"isEmployed" : false},
//                      {"name" : "squidward","age" : 50,"isEmployed" : true},
//                      {"name" : "sandy","age" : 27,"isEmployed" : true}]`

// const parsedData = JSON.parse(jsonName);
// const parsedData2 = JSON.parse(jsonPerson);
// const parsedData3 = JSON.parse(jsonPeople);

// console.log(parsedData)
// console.log(parsedData2)
// console.log(parsedData3)


fetch("C:/MYFILES/Bro_code_javascript/z-javascript/jsonExampleFile/person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .then(error => console.log(error))

// const loadFile = () => { 
//     //CORS URL
//     let corsURL = 'https://cors-anywhere.herokuapp.com/';
  
//     //My File URL
//     let myURL = './person.json';
  
//     fetch(corsURL + myURL)
//       .then(response => response.json())
//       .then(content => {
//         console.log(content);
//     })
// }
  
// loadFile()

// async function getJson(){
//     const response = await fetch("./name.json");
//     const data = await response.json();
//     drawBars(data);
// }

// getJson();