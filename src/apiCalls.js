export const currentMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2');
  const data = await response.json();

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
  return data
}