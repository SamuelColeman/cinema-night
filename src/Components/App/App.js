import React from 'react';
import logo from './logo.svg';
import React, { Component } from 'react';
import {  } from '.../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies : []
    }
  }

  async componentDidMount() {

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
