export const currentUser = (state={}, action) => {
  console.log(' current user firing')
  switch(action.type){
    case 'LOGIN_USER':
      return {
        name: action.name,
        id: action.id,
        isSignedIn: action.isSignedIn
      };
      default:
        return state;
  }
}