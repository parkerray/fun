//Adds click listener to new dad joke button
document.getElementById("newDadJoke").addEventListener("click", newDadJoke);

//Runs dad joke function on page load
newDadJoke();

//Fetches GIF and dad joke from APIs
function newDadJoke() {
    getJoke();
    getGif();
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

//Fetches GIF from GIPHY
function getGif() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=OOtTNV3LEuSif3QNu7hCcHWoJwGAWgXE', {
        headers: {
            tag: 'laughing',
            rating: 'g'
        }
    })
    .then(response => response.json())
    .then(data => document.getElementById("gif").style.backgroundImage = `url(${data.data.image_url})`);
}