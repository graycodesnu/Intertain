var game = document.querySelector("#game")
var gameSearchbtn = document.querySelector("#boardGameSearch")


console.log('hello!')

// todo add a list of categories
category = []


var family = document.getElementById('categories').value = "Family Game"
console.log(family)
function getGame() {
    var apiKey = "j93pbu8wKv"
    // var requestUrl = "https://www.boardgameatlas.com/api/category=7rV11PKqME&client_id=j93pbu8wKv"
    // var requestUrl = "https://api.boardgameatlas.com/category/7rV11PKqME/family-game?categories=7rV11PKqME"
    var requestUrl = "https://api.boardgameatlas.com/api/search?order_by=rank&family-gameascending=false&limit=1&random=true&client_id=j93pbu8wKv"
    
    console.log(requestUrl)
    
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
    })
    .then(function (data) {
        console.log(data)

        console.log('hi!')
        console.log(Object)

    // getting the first 10 games on the api
    // todo filter by categories 
    // todo need to randomize which games it pulls
        for(i = 0; i < 11; i++){
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

// * if categories.name === Family Game, 
// * then 