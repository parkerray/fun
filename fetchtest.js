//Fetches joke from icanhazdadjoke
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {'Accept' : 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log(data.joke))
}

getJoke();