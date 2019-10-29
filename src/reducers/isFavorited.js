export const isFavorited =  (state=true, action) => {
  switch(action.type) {
    case 'FAVORITE_MOVIE':
    return {     
      isFavorited: action.bool
    }
    default: 
      return state
  }
}

// return state.favorites.map(movie => {

//   return movie.id === action.id ? {...movie, isFavorited: !movie.isFavorited} : movie
  