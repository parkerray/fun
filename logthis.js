function logThis() {
    console.log(document.getElementById("input").value);
}

function makeParkerSay() {
    console.log(`Parker says ${document.getElementById("input").value}`);
}

document.getElementById("button").addEventListener("click", logThis);
document.getElementById("button-parker").addEventListener("click", makeParkerSay);

//This is a lot of fun

