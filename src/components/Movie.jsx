
import React, { useEffect, useState } from "react";

function Movie() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5449a9116f453d752c707b1ca27812a4')
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(error => console.error('Error fetching movies:', error));
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="">
            {movieList.map((movie) => (
                <img className="w-40 " key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            ))}
        </div>
    );
}

export default Movie;
