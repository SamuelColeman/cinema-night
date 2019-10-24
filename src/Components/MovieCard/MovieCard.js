import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster_path }) => {

    return (
        <section className='movie_card'>
            <h1>{ title }</h1>
            <img src={poster_path} />
            <button type='button'>Favorite</button>
        </section>
    )
}

export default MovieCard;