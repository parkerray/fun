function logThis() {
    console.log(document.getElementById("input").value);
    buttonIncrease(buttonCount);
}

function makeParkerSay() {
    console.log(`Parker says ${document.getElementById("input").value}`);
    buttonIncrease(buttonCount);
}

document.getElementById("button").addEventListener("click", logThis);
document.getElementById("button-parker").addEventListener("click", makeParkerSay);

let buttonCount = 0;

function buttonIncrease(currentCount) {
    buttonCount = currentCount + 1;
    document.getElementById("button-text").innerHTML = `You've pressed my buttons ${buttonCount} times. Refresh to reset!`;
}

//This is a lot of fun

