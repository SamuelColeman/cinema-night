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

// export const getEmail = (email) => ({
//   type: 'GET_EMAIL',
//   email
// })

// export const getPassword = (password) => ({
//   type: 'GET_PASSWORD',
//   password
// })