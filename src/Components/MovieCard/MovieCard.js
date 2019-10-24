import React from 'react';

const MovieCard = ({ title, poster_path }) => {

    return (
        <section>
            <p>{ title }</p>
            <img src={poster_path} />
        </section>
    )
} 

export default MovieCard;