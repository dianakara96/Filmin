


import React, { useState } from "react";
import SearchList from './SearchList';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        const apiKey = '5449a9116f453d752c707b1ca27812a4'; 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="flex justify-center pt-[10%] w-[100%]">
            <form className="w-[50%]" onSubmit={handleSubmit}>
                <div className="flex justify-between shadow-md border-2 p-2  rounded-lg w-[100%]">
                    <input
                        className="w-full outline-none rounded-md text-lg bg-black text-white"
                        type="text"
                        placeholder="Search Movies..."
                        value={query}
                        onChange={handleChange}
                    />
                    <button className="bg-red-800 text-white rounded-md px-4 py-2" type="submit">
                        Search
                    </button>
                </div>
            </form>
            <div>
                <SearchList movies={movies} />
            </div>
        </div>
    );
};

export default Search;
