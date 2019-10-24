import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster_path, overview, id }) => {

    return (
        <section className='movie_card' onClick={() => document.getElementById(id).removeAttribute('hidden')}>
            <h1>{ title }</h1>
            <img src={poster_path} />
            <button type='button'>Favorite</button>
            <p id={id} hidden>{ overview }</p>
        </section>
    )
}

export default MovieCard;