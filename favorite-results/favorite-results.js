var favBook = document.querySelector("#favBook")

// https://www.javascripttutorial.net/web-apis/javascript-localstorage/
// get list of names from localStorage
let keys = Object.keys(localStorage)

// https://bobbyhadz.com/blog/javascript-check-if-array-contains-substring-match#check-if-array-contains-a-substring-using-filter
var favBooks = keys.filter(element => element.includes('BOOK'))
console.log(favBooks)

var booksGenerated = false;
if(favBook){
    for(var i = 0; i < favBooks.length && i < 4; i++){
        var title = document.createElement("h4")
        var poster = document.createElement("img")

        var book = localStorage.getItem(favBooks[i]).split(',')

        title.textContent = book[0]
        poster.src = book[1]
        poster.setAttribute('style','width: 100%')

        favBook.children[i].appendChild(title)
        favBook.children[i].appendChild(poster)
    }
}

var favMovie = document.querySelector("#favMovie")

var favMovies = keys.filter(element => element.includes('MOVIE'))
console.log(favMovies)


if(favMovie){
    for(var i = 0; i < favMovies.length && i < 4; i++){
        var title = document.createElement("h4")
        var poster = document.createElement("img")

        var movie = localStorage.getItem(favMovies[i]).split(',')

        title.textContent = movie[0]
        poster.src = movie[1]
        poster.setAttribute('style','width: 100%')

        favMovie.children[i].appendChild(title)
        favMovie.children[i].appendChild(poster)
    }
}

var favGame = document.querySelector("#favGame")

var favGames = keys.filter(element => element.includes('GAME'))
console.log(favGames)

if(favGame){
    for(var i = 0; i < favGames.length && i < 4; i++){
        var title = document.createElement("h4")
        var poster = document.createElement("img")

        var game = localStorage.getItem(favGames[i]).split(',')

        title.textContent = game[0]
        poster.src = game[1]
        poster.setAttribute('style','width: 100%')

        favGame.children[i].appendChild(title)
        favGame.children[i].appendChild(poster)
    }
}