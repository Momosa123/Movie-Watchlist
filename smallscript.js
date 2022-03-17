// import { moviesFromLocalStorage } from "./script.js";

// console.log(moviesFromLocalStorage);
let moviesFromLocalStorage = JSON.parse(localStorage.getItem("myMovies"));
console.log(moviesFromLocalStorage);
let content = "";
if (moviesFromLocalStorage) {
  document
    .getElementById("placeholder-image-container")
    .classList.add("hidden");

  for (let item of moviesFromLocalStorage) {
    content += `<div id="movie-description" class="movie-description container" class="hidden">
        <div id="image-slot">
        <img class="movie-poster" src="${item.poster}" />
        </div>

        <div>
          <div class="movie-title-container">
            <h2 id="movie-title">${item.title}</h2>
            <span id="ratings"><i class="fas fa-star"></i>${item.ratings}</span>
          </div>
          <span id="runtime">${item.runtime}</span><span id="genre">${item.genre}</span
          >
          <p id="plot">${item.plot}</p>
        </div>
      </div>
    `;
  }

  document.getElementById("main-container").innerHTML = content;
  const movieDescription = document.getElementsByClassName("movie-description");
  for (let element of movieDescription) {
    element.classList.remove("hidden");
  }
}
