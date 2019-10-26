export const favouritesList = ( state = [], action ) => {
  switch( action.type ) {
    case 'FAVOURITES_LIST':
      return {
        favorites: action.favorites
      }
    default:
      return state;
  }
}