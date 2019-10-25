import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';

const MovieCard = ({ title, poster_path, overview, id, toggleFavourites }) => {
    // console.log(toggleFavourites)
    return (
        <section className='movie_card' onClick={() => document.getElementById(id).toggleAttribute('hidden')}>
            <h1>{ title }</h1>
            <img src={poster_path} alt={title} />
            <button  onClick={toggleFavourites}>Favorite</button>
            <p id={id} hidden>{ overview }</p>
        </section>
    )

}  

export const mapStateToProps = (state) => ({
    favourite: state.favourite
})

export default connect(mapStateToProps)(MovieCard);