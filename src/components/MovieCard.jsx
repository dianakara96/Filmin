import React from "react";
import Movie from './Movie';

const MovieCard = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
            <h1>Now Playing</h1>
            </div>
            <div className="flex justify-center">
                <div className="">
                    <Movie/>
                </div>
            </div>
        </div>
        
                 

    )
}

export default MovieCard;