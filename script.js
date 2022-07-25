var game = document.querySelector("#game")
var gameSearchbtn = document.querySelector("#boardGameSearch")
var categoriesDD = document.querySelector("#categories")
var adultRated = document.querySelector("#adultRated")


// grabbing drop down values from html
var family = document.getElementById('categories').value = "Family Game"
var history = document.getElementById('categories').value = "history"
var horror = document.getElementById('categories').value = "Horror"
var mystery = document.getElementById('categories').value = "Mystery"
var sciFi = document.getElementById('categories').value = "Sci-Fi"
var science = document.getElementById('categories').value = "Science"
var food = document.getElementById('categories').value = "Food"
var biographical = document.getElementById('categories').value = "Biographical"
var travel = document.getElementById('categories').value = "Travel"
var adventure = document.getElementById('categories').value = "Adventure"



    
function getGame() {
// &random=true

    if(mystery === categoriesDD.value) {
        var requestUrl = "https://api.boardgameatlas.com/api/search?categories=BBZb2d0ePt&client_id=j93pbu8wKv"
        console.log("SCOOB")
    } else if(horror === categoriesDD.value) {
        var requestUrl = "https://api.boardgameatlas.com/api/search?categories=cAIkk5aLdQ&client_id=j93pbu8wKv"
        console.log("AHHHHHH")
        // todo history isnt working
    }else if(history === categoriesDD.value) {
        var requestUrl = "https://api.boardgameatlas.com/api/search?categories=dghLhwyxVb&client_id=j93pbu8wKv"
        console.log("history, they are dead")
    }else if(family === categoriesDD.value) {
        console.log("FAM TIME g rated only")
        var requestUrl = "https://api.boardgameatlas.com/api/search?categories=7rV11PKqME&client_id=j93pbu8wKv"
    }
   
    var apiKey = "j93pbu8wKv"
    // var requestUrl = "https://api.boardgameatlas.com/api/search?categories=7rV11PKqME&client_id=j93pbu8wKv"

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
    // todo need to randomize which games it pulls
        for(i = 0; i < 1; i++){
            // console.log("IN FOR LOOP")
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

function getAdultGame() {
    var requestUrl = "https://api.boardgameatlas.com/api/search?categories=OE07lsfVqf&client_id=j93pbu8wKv"

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
    // todo need to randomize which games it pulls
        for(i = 0; i < 1; i++){
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
adultRated.addEventListener("click",getAdultGame)
