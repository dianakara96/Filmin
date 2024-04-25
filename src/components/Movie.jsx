


import React, { useEffect, useState } from "react";

function Movie() {
    const [nowPlayingList, setNowPlayingList] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);
    const [upcomingList, setUpcomingList] = useState([]);

    const getNowPlayingMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5449a9116f453d752c707b1ca27812a4')
        .then(res => res.json())
        .then(json => setNowPlayingList(json.results))
        .catch(error => console.error('Error fetching now playing movies:', error));
    };

    const getPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5449a9116f453d752c707b1ca27812a4')
        .then(res => res.json())
        .then(json => setPopularList(json.results))
        .catch(error => console.error('Error fetching popular movies:', error));
    };

    const getTopRatedMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5449a9116f453d752c707b1ca27812a4')
        .then(res => res.json())
        .then(json => setTopRatedList(json.results))
        .catch(error => console.error('Error fetching top rated movies:', error));
    };

    const getUpcomingMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5449a9116f453d752c707b1ca27812a4')
        .then(res => res.json())
        .then(json => setUpcomingList(json.results))
        .catch(error => console.error('Error fetching upcoming movies:', error));
    };

    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-white text-bold text-3xl py-1">Now Playing</h2>
            <div className="movies flex overflow-x-auto no-scrollbar cursor-pointer">
                {nowPlayingList.map((movie) => (
                    <img className="w-40" key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>

            <h2 className="text-white text-bold text-3xl ">Popular</h2>
            <div className="movies flex overflow-x-auto no-scrollbar cursor-pointer">
                {popularList.map((movie) => (
                    <img className="w-40" key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>

            <h2 className="text-white text-bold text-3xl">Top Rated</h2>
            <div className="movies flex overflow-x-auto no-scrollbar cursor-pointer">
                {topRatedList.map((movie) => (
                    <img className="w-40" key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>

            <h2 className="text-white text-bold text-3xl">Upcoming</h2>
            <div className="movies flex overflow-x-auto no-scrollbar cursor-pointer">
                {upcomingList.map((movie) => (
                    <img className="w-40" key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>
        </div>
    );
}

export default Movie;


