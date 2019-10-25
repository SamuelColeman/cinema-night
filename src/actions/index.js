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

export const login = ({ name, id, isSignedIn, favorites}) => {
  return ({
    type: 'LOGIN_USER',
    name,
    id,
    isSignedIn,
    favorites
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

export const isFavourite = (bool) => {
  return ({
    type: 'IS_FAVOURITE',
    bool
  })
}

// export const favouritesList = (array) => {
//   return ({
//     type: 'FAVOURITES_LIST',
//     array
//   })
// }