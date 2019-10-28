import React, { Component } from 'react';
import { currentMovies, deleteFavorite, addFavourite, getFavourites } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import MoviesContainer from '../../Components/MoviesContainer/MoviesContainer';

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePage from '../MoviePage/MoviePage';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import Form from '../Form/Form';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css'

class App extends Component {

  async componentDidMount() {
    const { getMovies, hasError, isLoading } = this.props;
    try {
      isLoading(true);
      const movies = await currentMovies();
      isLoading(false)
      getMovies(movies);
    } catch (error) {
      hasError(error.message)
    }
  }

  signOutUser = () => {
    let { currentUser } = this.props;
    currentUser.name = '';
    currentUser.id = null;
    currentUser.isSignedIn=false;
    console.log(currentUser)
  }

  handleFavourite = (movie) => {
    let { currentUser, errorMsg, hasError, favouritesList } = this.props;
    console.log(currentUser)
    if (currentUser.isSignedIn === true) {
      this.toggleFavourites(movie)
      // let favoritedMovies = favouritesList.favorites.map(favorite => favorite.addClass('active'))
      // console.log('------->', favoritedMovies)
      hasError('');
    } else {
      hasError('Must be signed in to favourite!');
    }
    console.log(currentUser)
  }

  toggleFavourites = async (movie) => {
    let { currentUser, favouritesList } = this.props;
    let currentMovie = favouritesList.favorites.find(film => film.movie_id === movie.id);
    let postedMovie = { 
        movie_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview
     }
    if (currentMovie === undefined) { 
        this.displayFavourites(currentUser.id);
        addFavourite(postedMovie, currentUser.id);
        this.displayFavourites(currentUser.id);
        console.log('here we go posting again')
      }
      this.displayFavourites(currentUser.id);
      this.removeFavourite(currentMovie);
      this.displayFavourites(currentUser.id);
  }

  removeFavourite = async (movie) => {
    const { favouritesList, currentUser } = this.props; 
     try {
      const deletedmovies = await deleteFavorite(movie.user_id, movie.movie_id);
      this.displayFavourites(currentUser.id)
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
      console.log(favouritesList)
  }

  selectMovie = e => {
    e.preventDefault();
    let { movies, favouritesList } = this.props;
    let movieTarget = parseInt(e.target.closest('section').id);
    let foundMovie = movies.find(film => film.id === movieTarget)
    this.handleFavourite(foundMovie);
  }

  render() {
    return (
      <section className='app'>
        <Route exact path='/login' render={() => <Form /> } />
        <Route exact path='/' render={() => <MoviesContainer selectMovie={this.selectMovie} signOutUser={this.signOutUser}/> } />
        <Route exact path='/favorites' render={() => <FavouritesContainer handleFavourite={this.handleFavourite}/>} />
        <Route exact path='/movies/:id' render={({ match }) => {
            let { movies } = this.props;
            const { id } = match.params;
            const filteredFilm = movies.find(movie => movie.id === parseInt(id)
            );
            return (
              <MoviePage {...filteredFilm} />
          )}} />
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
