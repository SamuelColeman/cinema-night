export const currentMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2');
  const data = await response.json();
  const poster = data.results.map(movie => {
  	movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  })
  return data.results;
}