//Adds click listener to new dad joke button
document.getElementById("newDadJoke").addEventListener("click", newDadJoke);

//Runs dad joke function on page load
newDadJoke();

//Fetches GIF and dad joke from APIs
function newDadJoke() {
    getJoke();
}

//Fetches joke from icanhazdadjoke
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {'Accept' : 'application/json'}
    })
    .then(response => response.json())
    .then(data => document.getElementById("joke-text").innerHTML = `${data.joke}`);
}