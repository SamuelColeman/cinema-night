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

export const login = ({ email, password }) => {
  console.log('email', email, 'password', password)
  return ({
    type: 'LOGIN_USER',
    email,
    password
    // name,
    // id,
    // isSignedIn
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