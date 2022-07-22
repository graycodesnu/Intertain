var zone = document.querySelector("#movieZone")

var url = //"https://api.themoviedb.org/3/genre/movie/list?api_key=e346bd747060c7a18ce3926d8f5571b9&language=en-US"
        "https://api.themoviedb.org/3/discover/movie?api_key=e346bd747060c7a18ce3926d8f5571b9&with_genres=18&page=1"
        //  "http://openlibrary.org/subjects/genre.json"

var posterPath = "https://image.tmdb.org/t/p/original/"

// var boardAPI = "https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=rHFhdFeTrQ&categories=aliens"


// var pastGenre = 'love'
// url = url.replace('genre',pastGenre) 

fetch(url)
    .then(function (response) {
    return response.json()
    })
    .then(function (data) {
        console.log(data)

        for(i = 0; i < 5; i++){
            var title = document.createElement('h2')
            var poster = document.createElement('img')
            var description = document.createElement('p')

            var currentMovie = data.results[i]

            title.textContent = currentMovie.title
            poster.src = posterPath.concat(currentMovie.poster_path)
            poster.setAttribute('style','width:25%')
            description.textContent = currentMovie.overview

            zone.appendChild(title)
            zone.appendChild(poster)
            zone.appendChild(description)
        }
    })
