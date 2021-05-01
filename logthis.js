//Logs the input to the console
function logThis() {
    console.log(document.getElementById("input").value);
    buttonIncrease(buttonCount);
}

document.getElementById("button").addEventListener("click", logThis);

//Logs the input to the console with "Parker says " in front
function makeParkerSay() {
    console.log(`Parker says "${document.getElementById("input").value}"`);
    buttonIncrease(buttonCount);
}

document.getElementById("button-parker").addEventListener("click", makeParkerSay);

//Counts how many times either of the buttons were pressed
let buttonCount = 0;

function buttonIncrease(currentCount) {
    buttonCount = currentCount + 1;
    document.getElementById("button-text").innerHTML = `You've pressed my buttons ${buttonCount} times. Refresh to reset!`;
}

