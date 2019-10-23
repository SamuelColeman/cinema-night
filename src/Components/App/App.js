import React, { Component } from 'react';
import { currentMovies } from '../../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies : [],
  //     error: ''
  //   }
  // }

  async componentDidMount() {
    const { getMovies, error, isLoading } = this.props;
    try {
      const movies = await currentMovies();
      getMovies(movies);
    } catch (error) {
      this.setState({ error : error.message })
    }
  }

  render() {
    return (
      <section className='app'>
        <MoviesContainer movies={this.state.movies}/>
      </section>
    )
  }

}

export const mapStateToProps = ({movies, error}) => ({
  movies,
  error
});



export default App;
