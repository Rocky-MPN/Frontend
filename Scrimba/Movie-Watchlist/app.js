const form = document.getElementById("form")
const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const resultsDisplay = document.getElementById("results-display")
const emptyPageLogo = document.getElementById("empty-page-logo")
const watchlistContainer = document.getElementById("watchlist-container")
let moviesArray = []
const watchlist = []





searchBtn.addEventListener("click", function (e) {
    e.preventDefault()
    resultsDisplay.innerHTML = ""

    if (searchBar.value === "") {
        resultsDisplay.innerHTML = `<div class="movie-container">
                                        <div class="empty-search">Unable to find what you're looking for. Please try another search.</div>
                                    </div>`
    }
    else {
        searchMovie(searchBar.value)
        emptyPageLogo.style.display = "none"
        resultsDisplay.style.display = "flex"


        //handle adding  and removing movies to watchlist array

        document.addEventListener("click", e => {

            if (moviesArray.includes(e.target.id)) {
                if (watchlist.includes(e.target.id)) {
                    for (let i = 0; i < watchlist.length; i++) {
                        if (watchlist[i] === e.target.id) {
                            watchlist.splice(i, 1)
                            document.getElementById(`${e.target.id}`).classList.remove("watchlist-icon-selected")
                        }
                    }
                    console.log("item removed")
                    console.log(watchlist)
                }
                else {
                    console.log("clicked on star")
                    watchlist.push(e.target.id)
                    console.log(watchlist)
                    document.getElementById(`${e.target.id}`).classList.add("watchlist-icon-selected")
                }

            }
        })

    }
})







async function searchMovie(title) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=2679c418&s=${title}`)
    const data = await res.json()

    for (movie of data.Search) {

        fetch(`http://www.omdbapi.com/?apikey=2679c418&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(imdb => {
                resultsDisplay.innerHTML += `
                <div class="movie-container">
                    <img src="${imdb.Poster}" alt="${imdb.Title} movie poster" class="movie-poster">
                    <div class="movie-container-right">
                        <div class="movie-container-right-title">
                            <div class="movie-title">${imdb.Title}</div>
                            <div class="movie-rating"><img src="images/star-icon.svg" class="star-icon"> ${imdb.imdbRating}</div>
                        </div>
                        <div class="movie-container-right-details">
                            <div class="movie-details">${imdb.Runtime}</div>
                            <div class="movie-details">${imdb.Genre}</div>
                            <div class="movie-details">
                            <img src="images/watchlist-icon.svg" class="watchlist-icon" id="${imdb.imdbID}">Watchlist</div>
                        </div>
                        <div class="movie-container-right-plot">
                        <div class="movie-plot">${imdb.Plot}</div>
                        </div>
                    </div>
                </div>`

                moviesArray.push(document.getElementById(`${imdb.imdbID}`).id)


            })

        searchBar.value = ""

    }

    console.log(data)

}



//render wathlist









