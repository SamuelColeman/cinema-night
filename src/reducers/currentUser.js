export const currentUser = (state={}, action) => {
  console.log('firing')
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