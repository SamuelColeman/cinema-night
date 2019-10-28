import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite } from '../../apiCalls';

export const MovieCard = ({ title, poster_path, overview, id, movies, hasError, selectMovie }) => {
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
           <section className='movie_card' id={id}> 
                <Link to={`/movies/${id}`}>
                    <div>
                        <h1>{ title }</h1>
                        <img className="movie__card--img" src={poster_path} alt={title} />
                        <h1>{ hasError }</h1>
                        {/* addFavourite( postedMovie, currentUser.id ) */}
                        {/* removeFavourite(id) */}
                    </div>
                </Link>
                <button onClick={(e) => selectMovie(e)}>Favorite</button>
            </section>
        )

}   

export const mapStateToProps = (state) => ({
    movies: state.movies,
    hasError: state.hasError
})

export default connect(mapStateToProps)(MovieCard);