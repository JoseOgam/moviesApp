const moviesList = [{
    title: "peaky blinders",
    trailer: "Views"
}, {
    title: "game of thrones",
    trailer: "Views"
}, {
    title: "extraction",
    trailer: "Views"
}, {
    title: "knght fall",
    trailer: "Views"
}, {
    title: "prison break",
    trailer: "Views"
}, {
    title: "sofia the first",
    trailer: "Views"
}, {
    title: "Relic",
    trailer: "Views"
}, ];

const filters = {
    searchMovie: ''
}

const renderMovies = (moviesList, filters) => {
    var filteredMovie = moviesList.filter(function(list) {
        return list.title.toLowerCase().includes(filters.searchMovie.toLowerCase());
    });

    document.querySelector("#all-movies").innerHTML = "";

    filteredMovie.forEach(function(list) {
        var movieEl = document.createElement("p");
        movieEl.textContent = list.title;
        document.querySelector("#all-movies").appendChild(movieEl);
    });
};
renderMovies(moviesList, filters);

document.querySelector("#input-search").addEventListener("input", (e) => {
    filters.searchMovie = e.target.value;
    renderMovies(moviesList, filters);
})

// moviesList.forEach((moviesList) => {
//     let p = document.createElement("p");
//     p.textContent = moviesList.title;
//     document.querySelector("#all-movies").appendChild(p);
// });