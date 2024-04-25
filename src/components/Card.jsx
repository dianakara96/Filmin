import React, {useEffect, useState} from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Card.css'
import {Link} from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Cards = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration = {2} />
            </SkeletonTheme>
        </div>
        :
        <Link to ={`movie/${movie.id}`} style={{textDecoration:'none', color:'white'}}>
            <div className='cards'>
                <img className='cards_img' src={`https://image.tmdb.org/t/p/w500${movie?movie.poster_path:''}`}alt="" />
                <div className='cards_overlay'>
                    <div className='card_title'>{movie?movie.original_title:''}</div>
                    <div className='card_runtime'>
                    {movie?movie.release_date:''}
                    <span className='card_rating'>
                        {movie?movie.vote_average:''}<FaStar />
                    </span>
                    </div>
                    <div className='cards_description'>
                        {movie?movie.overview.slice(0,118)+'...': ''}

                    </div>
                        
                </div>

            </div>

        </Link>
    }
    </>


}
export default Cards;


