

getGif();

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
    fetch('https://api.giphy.com/v1/gifs/random?api_key=OOtTNV3LEuSif3QNu7hCcHWoJwGAWgXE&tag=laughing&rating=g')
    .then(response => response.json())
    .then(data => document.getElementById("gif").style.backgroundImage = `url(${data.data.image_url})`);
}