import React, { Component } from 'react';
import { currentMovies } from '../../apiCalls';
import { getMovies, isLoading, hasError } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Form from '../Form/Form';
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

  

  render() {
    const { movies, errorMsg } = this.props;
    return (
      <section className='app'>
        {/* <MoviesContainer movies={movies} errorMsg={errorMsg} /> */}
        <Form />
      </section>
    )
  }

}

export const mapStateToProps = ({movies, error}) => ({
  movies,
  error
});

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovies,
    isLoading,
    hasError
  }, dispatch)
)



export default connect(mapStateToProps, mapDispatchToProps)(App);
