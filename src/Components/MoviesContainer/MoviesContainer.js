import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movies }) => {
    console.log(movies)
  const loopMovies = movies.map((movie) => {
      console.log(movie);
      return <MovieCard key={movie.id}
                        {...movie} />
  })
    return (
        <section className='movies-containers'>
          {loopMovies}
        </section>
    )
} 

export default MoviesContainer;