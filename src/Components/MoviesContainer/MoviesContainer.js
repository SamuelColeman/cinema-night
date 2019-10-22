import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies }) => {
  const loopMovies = movies.map((movie) => {
      console.log(movie);
      return <MovieCard />
  })
    return (
        <section className='movie-container'>
          {loopMovies}
        </section>
    )
}

export default MoviesContainer;