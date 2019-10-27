export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})

export const hasError = (errorMsg) => ({
  type: 'HAS_ERROR',
  errorMsg
})

export const login = ({ name, id, isSignedIn}) => {
  return ({
    type: 'LOGIN_USER',
    name,
    id,
    isSignedIn
  })
}

export const signUp = ({ name, email, password }) => {
  return ({
    type: 'SIGN_UP_USER',
    name,
    email,
    password
  })
}

export const favouritesList = ({ favorites }) => {
  return ({
    type: 'FAVOURITES_LIST',
    favorites
  })
}

export const selectedMovie = (id) => {
  return ({
    type: 'SELECTED_MOVIE',
    id
  })
}