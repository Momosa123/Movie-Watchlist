"use strict mode";
//si le film est déjà dans la liste de favori, l'indiquer à l'utilisateur
//possibilité de retirer un film
let filmInfo = {};

const searchForm = document.getElementById("movie-search-form");

const movieDescription = document.getElementById("movie-description");
let moviesArray = [];
let moviesFromLocalStorage = JSON.parse(localStorage.getItem("myMovies"));
console.log(moviesFromLocalStorage);
if (moviesFromLocalStorage) {
  moviesArray = moviesFromLocalStorage;
}
console.log(moviesArray);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let movieAsked = document.getElementById("movie-search").value;

  console.log(movieAsked);
  fetch(`http://www.omdbapi.com/?t=${movieAsked}&apikey=bdf04b2f`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.Response === "True") {
        document
          .getElementById("placeholder-image-container")
          .classList.add("hidden");
        document.getElementById("movie-description").classList.remove("hidden");
        document.getElementById(
          "image-slot"
        ).innerHTML = `<img class="movie-poster" src="${data.Poster}" />`;
        document.getElementById("movie-title").innerHTML = `${data.Title}`;
        document.getElementById(
          "ratings"
        ).innerHTML = `<i class="fas fa-star"></i> ${data.Ratings[0].Value}`;
        document.getElementById("runtime").innerHTML = `${data.Runtime}`;
        document.getElementById("genre").innerHTML = `${data.Genre}`;
        document.getElementById("plot").innerHTML = `${data.Plot}`;
        filmInfo = {
          title: data.Title,
          poster: data.Poster,
          ratings: data.Ratings[0].Value,
          runtime: data.Runtime,
          genre: data.Genre,
          plot: data.Plot,
        };
        console.log(filmInfo);
      } else {
        document.getElementById(
          "placeholder-image-container"
        ).children[1].innerHTML = "Your movie was not found, sorry";
      }
    });
});

document.getElementById("addFilm").addEventListener("click", () => {
  moviesArray.push(filmInfo);
  console.log(moviesArray);
  localStorage.setItem("myMovies", JSON.stringify(moviesArray));
  alert("Your movie has been succesfully added to your list");
});
