import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import login from '../../images/login.png';
// import logo from '../../images/title.png'

const MoviesContainer = ({ currentUser, movies, signOutUser, removeFavourite }) => {
  console.log(currentUser, movies)
  let button;
  if (currentUser.name === undefined) {
    button = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign In</h4>
        {/* <button>Sign In</button> */}
      </NavLink>
    )
  } else {
    button = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign Out</h4>
        {/* <button onClick={signOutUser}>Sign Out</button> */}
      </NavLink>
    )
  }
  const loopMovies = movies.map((movie) => {
      return <MovieCard key={movie.id}
        removeFavourite={removeFavourite}
                        {...movie} />
  })
    return (
        <section className='movies-containers'>
          <header>
          <h1 className="h1-cinema-night">CINEMA NIGHT</h1>
          <div className="div__movie--title">
          <h6 className="h6--playing title">Now Playing</h6>
          <h4 className="h4--view-favorites title-link">View Favorites</h4>
        
        {button}

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