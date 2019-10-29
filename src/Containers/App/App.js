import React, { Component } from 'react';
import { currentMovies, deleteFavorite, addFavourite, getFavourites } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MoviePage from '../MoviePage/MoviePage';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import Form from '../Form/Form';
import { Route } from 'react-router-dom';
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
    let { currentUser, favouritesList } = this.props;
    currentUser.name = '';
    currentUser.id = null;
    currentUser.isSignedIn = false;
    favouritesList.favorites = [];
  }

  handleFavourite = (movie) => {
    let { currentUser, hasError } = this.props;
    if (currentUser.isSignedIn === true) {
      this.toggleFavourites(movie)
      hasError('');
    } else {
      hasError('Must be signed in to favourite!');
    }
  }

  toggleFavourites = async (movie) => {
    let { currentUser, favouritesList } = this.props;
    let currentMovie = favouritesList.favorites.find(film => film.title === movie.title);
    if (currentMovie === undefined) {
        document.getElementById(movie.title).setAttribute('class', 'active');
        this.displayFavourites(currentUser.id);
        addFavourite(movie, currentUser.id);
        this.displayFavourites(currentUser.id);
      } else {
        // document.getElementById(movie.title).removeAttribute('class');
        document.getElementById(movie.poster_path).setAttribute('hidden', 'true');
        this.removeFavourite(currentMovie);
      }
    this.displayFavourites(currentUser.id);
  }

  removeFavourite = async (movie) => {
    const { currentUser } = this.props; 
     try {
      await deleteFavorite(movie.user_id, movie.movie_id);
    } catch (error) {
      hasError(error.message)
    }
    this.displayFavourites(currentUser.id);
  }

  displayFavourites = async (id) => {
      let { favouritesList } = this.props;
      try {
        const resp = await getFavourites(id);
            favouritesList.favorites = resp.favorites;
          } catch (error) {
            console.log(error)
      }
  }

  render() {
    return (
      <section className='app'>
        <Route exact path='/login' render={() => <Form /> } />
        <Route exact path='/' render={() => <MoviesContainer handleFavourite={this.handleFavourite} signOutUser={this.signOutUser}/> } />
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
  favouritesList: state.favouritesList
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
  isLoading: PropTypes.func
}

App.defaultProps = {
  isLoading: true,
  movies: [],
  currentUser: {},
  favorites: []
}