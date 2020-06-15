// var id = uuid();
const moviesList = [{
    // id: id,
    title: "peaky blinders",
    trailer: "Views"
}, {
    // id: id,
    title: "game of thrones",
    trailer: "Views"
}, {
    // id: id,
    title: "extraction",
    trailer: "Views"
}, {
    // id: id,
    title: "knght fall",
    trailer: "Views"
}, {
    // id: id,
    title: "prison break",
    trailer: "Views"
}, {
    // id: id,
    title: "sofia the first",
    trailer: "Views"
}, {
    // id: id,
    title: "Relic",
    trailer: "Views"
}, ];

const filters = {
    searchMovie: ''
}

// // Generate the DOM structure for a list
// var generateListDOM = function(list) {
//     var listEl = document.createElement("div");
//     var textEl = document.createElement("a");

//     if (list.title.length > 0) {
//         textEl.textContent = moviesList.title;
//     } else {
//         textEl.textContent = "No title";
//     }
//     textEl.setAttribute("href", `/view.html#${list.id}`)
//     listEl.appendChild(textEl);

//     return listEl;
// };
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