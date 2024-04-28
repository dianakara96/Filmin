
import React from "react";

const SearchList = ({ movies }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-black rounded-lg overflow-hidden shadow-md">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                            <p className="text-white">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchList;
