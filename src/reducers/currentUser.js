export const currentUser = (state={}, action) => {
  switch(action.type){
    case 'LOGIN_USER':
      return {
        name: action.name,
        id: action.id,
        isSignedIn: action.isSignedIn,
        favorites: action.favorites
      };
      default:
        return state;
  }
}