// div selectors
var zone = document.querySelector("#movies")
var book = document.querySelector("#books")
var game = document.querySelector("#boardgames")
// not being used

var categories = [mystery = {m:'9648', b:'mystery', g:'BBZb2d0ePt'},
                  horror = {m:'27', b:'horror', g:'cAIkk5aLdQ'},
                  family = {m:'10751', b:'young_adult_fiction', g:'7rV11PKqME'},
                  sciFi = {m:'878', b:'science_fiction', g:'3B3QpKvXD3'},
                  adventure = {m:'12', b:'fantasy', g:'KUBCKBkGxV'}]
// category variable
var genre = categories[localStorage.getItem('category')]

if(!localStorage.getItem('movieCounter')){
  var movieCounter = 0
}else{
  movieCounter = +localStorage.getItem('movieCounter')
}
if(!localStorage.getItem('gameCounter')){
  var gameCounter = 0
}else{
  gameCounter = +localStorage.getItem('gameCounter')
}
if(!localStorage.getItem('bookCounter')){
  var bookCounter = 0
}else{
  bookCounter = +localStorage.getItem('bookCounter')
}


var movieModal = document.querySelector('#movieModal')
// generate movie name and poster
function getMovieOptions(){
  // movieGenreAPIURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e346bd747060c7a18ce3926d8f5571b9&language=en-US"
  var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=3b1bc545c2aff630803e3dfd3ac89e2e&with_genres=<genre>&page=1"
  var posterPath = "https://image.tmdb.org/t/p/original/"
  movieURL = movieURL.replace('<genre>',genre.m)
  
  // Movie API (Aumio)
  fetch(movieURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var randomMovie = Math.floor(Math.random()*20)
      // console.log(randomMovie)
      
      var title = document.createElement("h4");
      var poster = document.createElement("img");
      var modalTitle = movieModal.children[0].children[0]
      var modalDescription = movieModal.children[0].children[1]

      var currentMovie = data.results[randomMovie];

      title.textContent = currentMovie.title;
      modalTitle.textContent = currentMovie.title;
      poster.src = posterPath.concat(currentMovie.poster_path);
      poster.setAttribute("style", "width:25%");
      modalDescription.textContent = currentMovie.overview;

      zone.appendChild(title);
      zone.appendChild(poster);
      // zone.appendChild(description);
      movieURL = movieURL.replace(genre.m,'<genre>')
    });
}

var movieHeart = document.getElementById("movieHeart")

function fillHeartMovie(){
  console.log("HEART MOVIE")
  console.log(movieHeart)
  movieHeart.classList.remove("fa-regular")
  movieHeart.classList.add("fa-solid","disabled")
  // SETTING MOVE TO LOCAL STORAGE
  console.log(zone.children)
  localStorage.setItem("MOVIE " + movieCounter,[zone.children[2].textContent,zone.children[3].src,movieModal.children[0].children[1].textContent])
  movieCounter++
  localStorage.setItem('movieCounter',movieCounter)
}
movieHeart.addEventListener("click",fillHeartMovie)



var bookModal = document.querySelector("#bookModal")
// generate book name and cover
function getBookOptions(){
// Book API (Grayson)
// https://openlibrary.org/dev/docs/api/covers


var url = "http://openlibrary.org/subjects/genre.json";
var coverPath = "https://covers.openlibrary.org/b/id/";

url = url.replace('genre',genre.b)

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var randomBook = Math.floor(Math.random()*12)

    var title = document.createElement("h4");
    var cover = document.createElement("img");
    var bookTitle = bookModal.children[0].children[0]
    var bookDescription = bookModal.children[0].children[1]

    var newBook = data.works[randomBook];

    title.textContent = newBook.title;
    bookTitle.textContent = newBook.title
    cover.src = coverPath.concat(newBook.cover_id,'-L.jpg');
    cover.setAttribute("style", "width: 25%");
    bookDescription.setAttribute('href',`https://openlibrary.org${newBook.key}`)
    // bookDescription.innerText("Click here for link to full information")

    book.appendChild(title);
    book.appendChild(cover);

    
    url = url.replace(genre.b,'genre')
  });
}

var bookHeart = document.getElementById("bookHeart")

function fillHeartBook(){
  console.log("HEART BOOK")
  // console.log(bookHeart)
  bookHeart.classList.remove("fa-regular")
  bookHeart.classList.add("fa-solid","disabled")
  // SETTING book TO LOCAL STORAGE
  localStorage.setItem("BOOK " + bookCounter,[book.children[2].textContent,book.children[3].src,bookModal.children[0].children[1].textContent])
  bookCounter++
  localStorage.setItem('bookCounter',bookCounter)
}
bookHeart.addEventListener("click",fillHeartBook)

var gameModal = document.querySelector("#gameModal")
// generate game name and related poster/box
function getGameOptions(){
  // gameAPI (Holly)
  var gameURL = "https://api.boardgameatlas.com/api/search?categories=genre&client_id=j93pbu8wKv"
  
  gameURL = gameURL.replace('genre',genre.g)

  fetch(gameURL)
      .then(function (response) {
          return response.json()
      })
      .then(function (data) {
        console.log(data)

        var randomGame = 25
        if(genre = mystery){
          randomGame -=10
        }

        var randomGame = Math.floor(Math.random()*randomGame)
        
        var title = document.createElement('h4')
        var poster = document.createElement('img')
        var modalTitle = gameModal.children[0].children[0]
        var description = gameModal.children[0].children[1]

        var currentGame = data.games[randomGame]
        console.log(currentGame)
        title.textContent = currentGame.name
        modalTitle.textContent = currentGame.name
        poster.src = (currentGame.image_url)
        poster.setAttribute('style','width:25%')
        description.textContent = currentGame.description_preview

        game.appendChild(title)
        game.appendChild(poster)
        // game.appendChild(description)
        // SETTING GAME TO LOCAL STORAGE
        
        gameURL = gameURL.replace(genre.g,'genre')
      })
}

var gameHeart = document.getElementById("heartBtn")

function fillHeartGame(){
  console.log("HEART")
  console.log(gameHeart)
  gameHeart.classList.remove("fa-regular")
  gameHeart.classList.add("fa-solid","disabled")
  localStorage.setItem("GAME " + gameCounter,[game.children[2].textContent,game.children[3].src,gameModal.children[0].children[1].textContent])
  gameCounter++
  localStorage.setItem('gameCounter',gameCounter)
}
gameHeart.addEventListener("click",fillHeartGame)


var bookRefresh = book.children[1]
var movieRefresh = zone.children[1]
var gameRefresh = game.children[1]

bookRefresh.addEventListener('click',function(){
  // console.log('nice')
  console.log(book.childNodes)
  var items = 2
  while(items>0){
    book.removeChild(book.lastChild)
    items--
  }
  bookHeart.classList.add("fa-regular")
  bookHeart.classList.remove("fa-solid","disabled")
  genre = categories[localStorage.getItem('category')]
  getBookOptions()
})

movieRefresh.addEventListener('click',function(){
  var items = 2
  while(items>0){
    zone.removeChild(zone.lastChild)
    items--
  }
  movieHeart.classList.add("fa-regular")
  movieHeart.classList.remove("fa-solid","disabled")
  genre = categories[localStorage.getItem('category')]
  getMovieOptions()
})

gameRefresh.addEventListener('click',function(){
  var items = 2
  while(items>0){
    game.removeChild(game.lastChild)
    items--
  }
  gameHeart.classList.add("fa-regular")
  gameHeart.classList.remove("fa-solid","disabled")
  genre = categories[localStorage.getItem('category')]
  getGameOptions()
})

getMovieOptions()
getBookOptions()
getGameOptions()