export const currentMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2');
  const data = await response.json();
  data.results.forEach(movie => {
  	movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
  })
  return data.results;
}

export const loginVerification = async (info) => { 
  const options = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch('http://localhost:3001/api/v1/login', options)
  const data = await resp.json();
  console.log('fetch data-->', data)
  return data
}

export const signUpVerification = async (info) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch('http://localhost:3001/api/v1/users', options)
  const data = await resp.json();
  console.log('fetch data-->', data)
  return data
}

export const addFavourite = async ( id, movie ) => {
  console.log('IN POST!!!', movie, id)
  const options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp =  await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`, options);
  const data = await resp.json();
  console.log(data)
  return data
}

export const getFavourites = async ( id ) => {

  const resp =  await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`);
  const data = await resp.json();
  return data
}

export const deleteFavorite = async ( userId, movieId ) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp =  await fetch(`http://localhost:3001/api/v1/users/${userId}/moviefavorites/${movieId}`, options);
  const data = await resp.json();
  return data
}
