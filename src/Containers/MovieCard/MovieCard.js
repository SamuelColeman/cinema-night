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
                <img src={fave} id={currentMovie.title} className= {active} onClick={() => handleFavourite(postedMovie)}></img>

                <Link to={`/movies/${id}`}>
                    <div>
                        <h1>{ title }</h1>
                        <img className="movie__card--img" src={poster_path} alt={title} />
                        <h1>{ hasError }</h1>
                    </div>
                </Link>    
            </section>
        )
}   

export const mapStateToProps = (state) => ({
    movies: state.movies,
    hasError: state.hasError
})

export default connect(mapStateToProps)(MovieCard);