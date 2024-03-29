import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export const MoviesContainer = ({ currentUser, movies, signOutUser, handleFavourite, favouritesList }) => {

    let signINbutton = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign In</h4>
      </NavLink>
    )
    let signOUTbutton = (
      <NavLink className="title-link" to='/login'>
        <h4 className="h4--login" onClick={signOutUser}>Sign Out</h4>
      </NavLink>
    )
  const loopMovies = movies.map((movie) => {
    if (favouritesList.favorites && favouritesList.favorites.find(film => film.title === movie.title)) {
      return <MovieCard key={movie.id} active='active'
              handleFavourite={handleFavourite}
                        {...movie} />
    } else {
      return <MovieCard key={movie.id} active='inactive'
              handleFavourite={handleFavourite}
                        {...movie} />
    }
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
  movies: state.movies,
  favouritesList: state.favouritesList,
})

export default connect(mapStateToProps)(MoviesContainer);

MoviesContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  signOutUser: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func,
  handleFavorite: PropTypes.func
}

MoviesContainer.defaultProps = {
  currentUser: {},
  movies: []
}