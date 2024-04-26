

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";


function Trailer() {
    const { movieId } = useParams();
    const [trailerKey, setTrailerKey] = useState(null);
    const [currentMovieDetail, setCurrentMovieDetail] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5449a9116f453d752c707b1ca27812a4`)
            .then(res => res.json())
            .then(json => {
                setCurrentMovieDetail(json);
            })
            .catch(error => console.error('Error fetching movie details:', error));

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=5449a9116f453d752c707b1ca27812a4`)
            .then(res => res.json())
            .then(json => {
                const key = json.results.length > 0 ? json.results[0].key : null;
                setTrailerKey(key);
            })
            .catch(error => console.error('Error fetching movie trailer:', error));
    }, [movieId]);

    return (
        <div className="trailer">
            {trailerKey && (
                <iframe
                    width="800"
                    height="550"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube video player"
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}

            <div >
                <div className=" text-white text-3xl font-bold">Watch Movie</div>
               
            
                <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <p className="flex items-center px-6 py-2 bg-black text-black rounded-md hover:bg-opacity-80"> <CiPlay1 /><span className="movie__imdbButton movie__Button bg-red-800 text-white px-4 py-1 ml-1  ">PLAY</span> </p>
                </a>
            </div>
        </div>
    );
}

export default Trailer;
