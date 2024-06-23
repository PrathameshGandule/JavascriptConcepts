let timeoutID;

function startTimer(){
    timeoutID = setTimeout(function(){window.alert("Booo")}, 3000);
    console.log("started");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("cleared");
}