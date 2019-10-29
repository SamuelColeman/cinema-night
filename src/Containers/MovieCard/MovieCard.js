import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fave from '../../images/transparent-heard.png'

export const MovieCard = ({ title, poster_path, overview, id, movies, hasError, handleFavourite, active }) => {
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
           <section className="movie_card" id={id}> 
           <section className="movie__div--fave">
                <h1 className="movie__h1--error">{ hasError }</h1>
                <img src={fave} id={currentMovie.title} className= {active} onClick={() => handleFavourite(postedMovie)}></img>
                </section>
                <Link to={`/movies/${id}`}>
                    
                        <h1 className="movie__card--title">{ title }</h1>
                        <img className="movie__card--img" src={poster_path} alt={title} />
    
                </Link>    
            </section>
        )
}   

export const mapStateToProps = (state) => ({
    movies: state.movies,
    hasError: state.hasError
})

export default connect(mapStateToProps)(MovieCard);