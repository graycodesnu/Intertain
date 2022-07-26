var zone = document.querySelector("#movieZone")
// movieGenreAPIURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e346bd747060c7a18ce3926d8f5571b9&language=en-US"

var categories = [mystery = {m:'9648', b:'mystery', g:'BBZb2d0ePt'},
                  horror = {m:'27', b:'horror', g:'cAIkk5aLdQ'},
                  family = {m:'10751', b:'young_adult_fiction', g:'7rV11PKqME'},
                  sciFi = {m:'878', b:'science_fiction', g:'3B3QpKvXD3'},
                  adventure = {m:'12', b:'fantasy', g:'KUBCKBkGxV'}]

var genre = categories[4];

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

    for (i = 0; i < 1; i++) {
      var title = document.createElement("h2");
      var poster = document.createElement("img");
      var description = document.createElement("p");

      var currentMovie = data.results[i];

      title.textContent = currentMovie.title;
      poster.src = posterPath.concat(currentMovie.poster_path);
      poster.setAttribute("style", "width:25%");
      description.textContent = currentMovie.overview;

      zone.appendChild(title);
      zone.appendChild(poster);
      zone.appendChild(description);
    }
  })

// Book API (Grayson)
  // https://openlibrary.org/dev/docs/api/covers

var book = document.querySelector("#bookAPI");
var url = "http://openlibrary.org/subjects/genre.json";
var coverPath = "https://covers.openlibrary.org/b/id/";

url = url.replace('genre',genre.b)

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (i = 0; i < 1; i++) {
      var title = document.createElement("h2");
      var cover = document.createElement("img");

      var newBook = data.works[i];

      title.textContent = newBook.title;
      cover.src = coverPath.concat(newBook.cover_id,'-L.jpg');
      cover.setAttribute("style", "width: 25%");

      book.appendChild(title);
      book.appendChild(cover);
    }
  });
  
// gameAPI (Holly)

var game = document.querySelector("#game")
var gameURL = "https://api.boardgameatlas.com/api/search?categories=genre&client_id=j93pbu8wKv"

gameURL = gameURL.replace('genre',genre.g)

fetch(gameURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
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