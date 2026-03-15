var url = "https://api.themoviedb.org/3/trending/movie/week?api_key=e95929cf0f089dc675f6f2c7ae4ca352"

fetch(url)
    .then(res => res.json())
    .then(data => {
        var movieListData = "";
        for(var i = 0; i < data.results.length; i++) {
            movieListData += `
                    <div class="col-lg-3">
                        <div class="card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.results[i].title}</h5>
                                <p class="card-text">${data.results[i].overview}</p>
                            </div>
                        </div>
                    </div>
                `;
        }
        document.querySelector("#movie-list").innerHTML = movieListData;
    })







