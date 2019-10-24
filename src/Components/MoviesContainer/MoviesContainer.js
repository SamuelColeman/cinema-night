import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies }) => {
    console.log(movies)
  const loopMovies = movies.map((movie) => {
      console.log(movie);
      return <MovieCard key={movie.id}
                        {...movie} />
  })
    return (
        <section className='movie-container'>
          {loopMovies}
        </section>
    )
} 

export default MoviesContainer;