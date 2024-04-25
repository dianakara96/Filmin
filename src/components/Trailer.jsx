
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Trailer() {
    const { movieId } = useParams();
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect(() => {
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
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube video player"
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

export default Trailer;
