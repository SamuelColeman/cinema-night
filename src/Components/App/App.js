import React, { Component } from 'react';
import { currentMovies, deleteFavorite, addFavourite, getFavourites } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import Form from '../Form/Form';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {

  async componentDidMount() {
    const {currentUser, getMovies, hasError, isLoading } = this.props;
    try {
      isLoading(true);
      const movies = await currentMovies();
      isLoading(false)
      getMovies(movies);
    } catch (error) {
      hasError(error.message)
    }
    if(currentUser.name) {
      try {
        let userFavorites = await getFavourites(currentUser.id)
        this.displayFavourites(userFavorites)
      } catch(error) {
      }
    }
    console.log(this.props)
  }

  signOutUser = () => {
    let { currentUser } = this.props;
    currentUser.name = '';
    currentUser.id = null;
    currentUser.isSignedIn=false;
  }

  handleFavourite = (e, movie, postedMovie) => {
    e.preventDefault()
    console.log('MOVIE-->', movie)
    let { currentUser, hasError } = this.props;
    console.log(currentUser.favorites)
    if (currentUser.isSignedIn === true) {
      this.toggleFavourites(e, movie, postedMovie)
      hasError('');
    } else {
      hasError('Must be signed in to favourite!');
    }
  }

  toggleFavourites = (e, movie, postedMovie) => {
    console.log('IN TOGGLE', 'movie', movie, 'posted', postedMovie)
    e.preventDefault()
    let id = this.props.currentUser.id
    if(this.props.favouritesList.favorites.map(favorite => favorite.title).includes(movie.title)) {
      this.removeFavourite(id, movie.id)
    } else {
      this.postFavourite(id, postedMovie)
    }
    }

    postFavourite = async (id, movie) => {
      try {
        await addFavourite(id, movie)
        let currentFavorites = await getFavourites(id)
        this.props.favouritesList(currentFavorites)
      } catch({errorMsg}) {
      }
    }
  
  removeFavourite = async (id, movieId) => {
     try {
      await deleteFavorite(id, movieId);
      this.displayFavourites(id)
    } catch (error) {
      hasError(error.message)
    }
  }

  displayFavourites = async (id) => {
      let { favouritesList } = this.props;
      const resp = await getFavourites(id);
      if(resp.favorites) {
        favouritesList.favorites = resp.favorites;
      }
  }

  render() {
    return (
      <section className='app'>
        <Route exact path='/login' render={() => <Form /> } />
        <Route exact path='/' render={() => <MoviesContainer selectMovie={this.selectMovie} className='movie_container' signOutUser={this.signOutUser} removeFavourite={this.removeFavourite} handleFavourite={this.handleFavourite}/> } />
        <Route exact path='/favorites' render={() => <FavouritesContainer handleFavourite={this.handleFavourite}/>} />
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  error: state.error,
  currentUser: state.currentUser,
  favouritesList: state.favouritesList,
  selectedMovie: state.selectedMovie
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovies,
    isLoading,
    hasError
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    isSignedIn: PropTypes.bool
  }),
  favorites: PropTypes.arrayOf(PropTypes.object),
  getMovies: PropTypes.func,
  hasError: PropTypes.func,
  isLoading: PropTypes.func,
  selectedMovie: PropTypes.object
}

App.defaultProps = {
  isLoading: true,
  movies: [],
  currentUser: {},
  favorites: [],
  selectedMovie: {}
}