import React, { Component } from 'react';
import { currentMovies, deleteFavorite, addFavourite, getFavourites } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import Form from '../Form/Form';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css'

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
      console.log(currentUser.name)
      try {
        let userFavorites = await getFavourites(currentUser.id)
        console.log(' favorites in new mount', userFavorites)
        this.displayFavourites(userFavorites)
      } catch(error) {
        console.log(error)
      }
    }
  }

  signOutUser = () => {
    let { currentUser } = this.props;
    currentUser.name = '';
    currentUser.id = null;
    currentUser.isSignedIn=false;
    console.log(currentUser)
  }

  handleFavourite = (e, movie) => {
    console.log('MOVIE-->', movie)
    let { currentUser, errorMsg, hasError } = this.props;
    console.log(currentUser.favorites)
    if (currentUser.isSignedIn === true) {
      this.toggleFavourites(e, movie)
      hasError('');
    } else {
      hasError('Must be signed in to favourite!');
    }
  }

  toggleFavourites = (e, movie) => {
    e.preventDefault()
    let id = this.props.currentUser.id
    console.log('in toggle --->', id, movie, movie.movie_id)
    if(this.props.favouritesList.favorites.map(favorite => favorite.title).includes(movie.title)) {
      this.removeFavourite(id, movie.id)
    } else {
      this.postFavourite(id, movie)
    }
    }

    postFavourite = async (id, movie) => {
      try {
        await addFavourite(movie, id)
        let currentFavorites = await getFavourites(id)
        this.props.favouritesList(currentFavorites)
      } catch({errorMsg}) {
        console.log(errorMsg)
      }
    }
  

  removeFavourite = async (id, movieId) => {
    console.log('in remove favorites--->', id, movieId)
    const { favouritesList } = this.props; 
    console.log('before', favouritesList)
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
      // }
    console.log('after get', favouritesList.favorites)
  }

  // selectMovie = e => {
  //   let { movies, favouritesList } = this.props;
  //   let movieTarget = parseInt(e.target.closest('section').id);
  //   console.log(movies, movieTarget)
  //   console.log(favouritesList)
  //   let foundMovie = movies.find(film => film.id === movieTarget)
  //   console.log('foundMovie', foundMovie)
  //   this.handleFavourite(foundMovie);
  //   // selectedMovie(movieTarget);
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
