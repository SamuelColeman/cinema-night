import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
import { addFavourite } from '../../apiCalls';

const MovieCard = ({ title, poster_path, overview, id ,movies, currentUser}) => {
  
    let currentMovie =  movies.find(movie => movie.id === id);
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
                <button onClick={() => addFavourite( postedMovie, currentUser.id )}>Favorite</button>
                <p id={id} hidden>{overview}</p>
            </section>
        )

}  

export const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    favourite: state.favourite,
    movies: state.movies,
})

export default connect(mapStateToProps)(MovieCard);