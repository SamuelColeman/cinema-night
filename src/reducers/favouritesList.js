export const favouritesList = ( state = [], action ) => {
  switch( action.type ) {
    case 'FAVOURITES_LIST':
      return {
        favouritesList: action.favouritesList
      }
    default:
      return state;
  }
}