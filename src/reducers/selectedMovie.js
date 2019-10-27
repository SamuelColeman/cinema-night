export const selectedMovie = (state = {}, action) => {
  switch(action.type) {
    case 'SELECTED_MOVIE':
      return action.selectedMovie;
    default:
      return state;
  }
}