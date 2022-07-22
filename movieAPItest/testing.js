var zone = document.querySelector("#movieZone")

var url = //"https://api.themoviedb.org/3/genre/movie/list?api_key=e346bd747060c7a18ce3926d8f5571b9&language=en-US"
        "https://api.themoviedb.org/3/discover/movie?api_key=e346bd747060c7a18ce3926d8f5571b9&with_genres=18&page=3"
        //  "http://openlibrary.org/subjects/genre.json"

var posterPath = "https://image.tmdb.org/t/p/original/"
// var pastGenre = 'love'
// url = url.replace('genre',pastGenre) 

fetch(url)
    .then(function (response) {
    return response.json()
    })
    .then(function (data) {
        console.log(data)
        zone.children[0].textContent = data.results[0].title
        zone.children[1].src = posterPath.concat(data.results[0].poster_path)
        zone.children[1].setAttribute('style','width:25%')
    })
