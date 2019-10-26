import React, { Component } from 'react';
import { currentMovies, deleteFavorite } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Form from '../Form/Form';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';

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

  removeFavourite = async (id) => {
    console.log('innit remove', id)
    const { favouritesList } = this.props; 
    console.log('THIS IS IN REMOVE', favouritesList.favorites);
    let currentMovie = favouritesList.favorites.find(movie => movie.movie_id === id);
     console.log(currentMovie);
     let resp = await deleteFavorite(currentMovie.user_id, currentMovie.movie_id);

     if(resp.id) {
      // this.props.favouritesList({favorites: resp.favorites })
      console.log(' INSIDEEE OF REMOVE ');

    }

    if(resp.error !== undefined) {
      // this.setState({error: 'Failed to fetch favourites.'})
      console.log('BOB IS IN TROUBLE')
    } else {
    // this.setState({error: ''})
       console.log('IS LIT UP IN HERE')
  }

    console.log(resp);
  }


  render() {
    return (
      <section className='app'>
        <Route exact path='/login' render={() => <Form /> } />
        <Route exact path='/' render={() => <MoviesContainer className='movie_container' signOutUser={this.signOutUser} removeFavourite={this.removeFavourite}/> } />
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  // ({ movies, error, currentUser, favourite })
  movies: state.movies,
  error: state.error,
  currentUser: state.currentUser,
  favouritesList: state.favouritesList

});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovies,
    isLoading,
    hasError,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
