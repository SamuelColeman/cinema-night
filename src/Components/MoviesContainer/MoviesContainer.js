import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MoviesContainer = ({ currentUser, movies, signOutUser }) => {
  console.log(currentUser)
  let button;
  if (currentUser.name === undefined) {
    button = (
      <Link to='/login'>
        <button>Sign In</button>
      </Link>
    )
  } else {
    button = (
      <Link to='/login'>
        <button onClick={signOutUser}>Sign Out</button>
      </Link>
    )
  }
  const loopMovies = movies.map((movie) => {
      return <MovieCard key={movie.id}
                        {...movie} />
  })
    return (
        <section className='movies-containers'>
        <h1>Now Playing</h1>
          {button}
          {loopMovies}
        </section>
    ) 
} 

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  movies: state.movies
})

export default connect(mapStateToProps)(MoviesContainer);