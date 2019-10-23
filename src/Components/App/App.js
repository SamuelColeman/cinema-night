import React, { Component } from 'react';
import { currentMovies } from '../../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies : [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const movies = await currentMovies();
      this.setState({ movies: movies })
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

export default App;
