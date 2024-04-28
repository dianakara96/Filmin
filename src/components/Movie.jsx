


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie() {
    const [nowPlayingList, setNowPlayingList] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);
    const [upcomingList, setUpcomingList] = useState([]);
    const [watchLaterList, setWatchLaterList] = useState([]);

   
 
  const addToWatchLater = (movie) => {
    const updatedList = [...watchLaterList, movie];
    setWatchLaterList(updatedList);
    localStorage.setItem("watchLaterList", JSON.stringify(updatedList));
};

  

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
        <div className="container mx-auto px-4 py-8">  
            <h2 className="text-white text-bold text-4xl font-bold py-1">Now Playing</h2>
            <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-5">  
                {nowPlayingList.map((movie) => (
                    <div key={movie.id} className="">
                        <Link to={`/trailer/${movie.id}`} className="">
                            <img
                                className="rounded-md shadow-md h-auto w-full object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <button onClick={() => addToWatchLater(movie)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Add to Watch Later
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-white text-bold text-4xl font-bold py-1">Popular</h2>
            <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-5">  
                {popularList.map((movie) => (
                    <div key={movie.id} className="">
                        <Link to={`/trailer/${movie.id}`} className="">
                            <img
                                className="rounded-md shadow-md h-auto w-full object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <button onClick={() => addToWatchLater(movie)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Add to Watch Later
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-white text-bold text-4xl font-bold py-1">Top Rated</h2>
            <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-5">  
                {topRatedList.map((movie) => (
                    <div key={movie.id} className="">
                        <Link to={`/trailer/${movie.id}`} className="">
                            <img
                                className="rounded-md shadow-md h-auto w-full object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <button onClick={() => addToWatchLater(movie)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Add to Watch Later
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-white text-bold text-4xl font-bold py-1">Upcoming</h2>
            <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-5">  
                {upcomingList.map((movie) => (
                    <div key={movie.id} className="">
                        <Link to={`/trailer/${movie.id}`} className="">
                            <img
                                className="rounded-md shadow-md h-auto w-full object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <button onClick={() => addToWatchLater(movie)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Add to Watch Later
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}     

export default Movie;
