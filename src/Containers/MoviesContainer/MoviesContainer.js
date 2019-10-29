import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MoviesContainer = ({ currentUser, movies, signOutUser, handleFavourite }) => {
    let signINbutton = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign In</h4>
        {/* <button>Sign In</button> */}
      </NavLink>
    )
    let signOUTbutton = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign Out</h4>
      </NavLink>
    )
  const loopMovies = movies.map((movie) => {
      return <MovieCard key={movie.id}
              handleFavourite={handleFavourite}
                        {...movie} />
  })
    return (
        <section className='movies-containers'>
          <header>
          <h1 className="h1-cinema-night">CINEMA NIGHT</h1>
          <div className="div__movie--title">
          <h6 className="h6--playing title">Now Playing</h6>
          <Link to='/favorites'>
            <h4 className="h4--view-favorites title-link">View Favorites</h4>
          </Link>
        { currentUser.name === undefined || currentUser.id === null ? signINbutton : signOUTbutton }
        </div>
          </header>
          <div className="movies">
          {loopMovies}
          </div>
        </section>
    ) 
} 

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  movies: state.movies
})

export default connect(mapStateToProps)(MoviesContainer);