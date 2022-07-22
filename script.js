var game = document.querySelector("#game")
var gameSearchbtn = document.querySelector("#boardGameSearch")


console.log('hello!')
function getGame() {
    var apiKey = "j93pbu8wKv"
    var requestUrl = "https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=" + apiKey
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
    })
    .then(function (data) {
        console.log(data)
        console.log('hi!')

        // document.querySelector

        // for(i = 0; i < 5; i++){
        //     var title = document.createElement('h2')
        //     var poster = document.createElement('img')
        //     var description = document.createElement('p')

        //     var currentMovie = data.results[i]

        //     title.textContent = currentMovie.title
        //     poster.src = posterPath.concat(currentMovie.poster_path)
        //     poster.setAttribute('style','width:25%')
        //     description.textContent = currentMovie.overview

        //     zone.appendChild(title)
        //     zone.appendChild(poster)
        //     zone.appendChild(description)
     
        })
    }


gameSearchbtn.addEventListener("click",getGame)