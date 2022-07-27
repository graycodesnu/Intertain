console.log("connected")
var favBook = document.getElementById("#favBook")
// Book
var bookStorage = window.localStorage.getItem('BOOK');
var bookTitle = localStorage.getItem("BOOK")

console.log(bookStorage);
const jsonBook = JSON.parse(bookTitle)
console.log(bookTitle)
var title = bookTitle.title
console.log(title)
var title = document.createElement("h4");
var poster = document.createElement("img");
// todo get specific item from arr from local storage


// append to page
// favBook.appendChild(title)
// favBook.appendChild(poster)


// Movie
var movieStorage =window.localStorage.getItem("MOVIE");
console.log(movieStorage)

// Game
var gameStorage = window.localStorage.getItem('GAME');
console.log(gameStorage)
