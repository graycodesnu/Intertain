var game = document.querySelector("#game")
var gameSearchbtn = document.querySelector("#boardGameSearch")


console.log('hello!')
function getGame() {
    var apiKey = "j93pbu8wKv"
    // var requestUrl = "https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=" + apiKey
    var requestUrl = "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=j93pbu8wKv"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
    })
    .then(function (data) {
        console.log(data)

        console.log('hi!')

    // getting the first 5 games on the api
    // todo filter by categories 
        for(i = 0; i < 5; i++){
            console.log("IN FOR LOOP")
            var title = document.createElement('h2')
            var poster = document.createElement('img')
            var description = document.createElement('p')

            var currentGame = data.games[i]
            console.log(currentGame)
            title.textContent = currentGame.name
            poster.src = (currentGame.image_url)
            poster.setAttribute('style','width:25%')
            description.textContent = currentGame.description

            game.appendChild(title)
            game.appendChild(poster)
            game.appendChild(description)
        }



        })
    }


gameSearchbtn.addEventListener("click",getGame)