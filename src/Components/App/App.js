import React, { Component } from 'react';
import { currentMovies } from '../../apiCalls';
import { getMovies, isLoading, hasError, isFavourite } from '../../actions';
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


  render() {
    return (
      <section className='app'>
        <Route exact path='/login' render={() => <Form /> } />
        <Route exact path='/' render={() => <MoviesContainer className='movie_container' signOutUser={this.signOutUser} /> } />
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  // ({ movies, error, currentUser, favourite })
  movies: state.movies,
  error: state.error,
  currentUser: state.currentUser,
  favourite: state.favourite
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovies,
    isLoading,
    hasError,
    isFavourite
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
