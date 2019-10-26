import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
// import { addFavourite } from '../../apiCalls';

const MovieCard = ({ title, poster_path, overview, id ,movies, currentUser, favouritesList, removeFavourite, handleFavourite, hasError }) => {
    console.log('Error', hasError)
    let currentMovie =  movies.find(movie => movie.id === id);
     // console.log(currentMovie);
     let postedMovie = { 
        movie_id: currentMovie.id,
        title: currentMovie.title,
        poster_path: currentMovie.poster_path,
        release_date: currentMovie.release_date,
        vote_average: currentMovie.vote_average,
        overview: currentMovie.overview
     }
        return (
            <section className='movie_card' onClick={() => document.getElementById(id).toggleAttribute('hidden')}>
                <h1>{ title }</h1>
                <img src={poster_path} alt={title} />
                <button onClick={() => handleFavourite( postedMovie )}>Favorite</button>
                <h1>{ hasError }</h1>
                {/* addFavourite( postedMovie, currentUser.id ) */}
                {/* removeFavourite(id) */}
                <p id={id} hidden>{overview}</p>
            </section>
        )

}  

export const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    favouritesList: state.favouritesList,
    movies: state.movies,
    hasError: state.hasError,
    error: state.error 
})

export default connect(mapStateToProps)(MovieCard);