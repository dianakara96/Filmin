

import React, { useEffect, useState } from "react";

function Watchlist() {
    const [watchLaterList, setWatchLaterList] = useState([]);

    useEffect(() => {
        loadWatchLaterList();
    }, []);

    const loadWatchLaterList = () => {
        const storedList = localStorage.getItem("watchLaterList");
        if (storedList) {
            const list = JSON.parse(storedList);
            const promises = list.map(movie => fetchTrailerKey(movie.id));
            Promise.all(promises)
                .then(trailerKeys => {
                    const updatedList = list.map((movie, index) => ({
                        ...movie,
                        trailerKey: trailerKeys[index]
                    }));
                    setWatchLaterList(updatedList);
                })
                .catch(error => console.error('Error fetching trailer keys:', error));
        }
    };

    const fetchTrailerKey = (movieId) => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=5449a9116f453d752c707b1ca27812a4`)
            .then(res => res.json())
            .then(json => {
                const key = json.results.length > 0 ? json.results[0].key : null;
                return key;
            });
    };

    const removeFromWatchLater = (movieId) => {
        const updatedList = watchLaterList.filter(movie => movie.id !== movieId);
        setWatchLaterList(updatedList);
        localStorage.setItem("watchLaterList", JSON.stringify(updatedList));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-white text-bold text-4xl font-bold py-1">Watch Later</h2>
            <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-5">  
                {watchLaterList.map((movie) => (
                    <div key={movie.id} className="">
                        <img
                            className="rounded-md shadow-md h-auto w-full object-cover"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        {movie.trailerKey && (
                            <iframe
                                width="280"
                                height="160"
                                src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                                title="YouTube video player"
                                frameBorder='0'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                        <button onClick={() => removeFromWatchLater(movie.id)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Remove from Watch Later
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchlist;

