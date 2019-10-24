export const currentUser = (state={}, action) => {
  switch(action.type){
    case 'LOGIN_USER':
        console.log(email: action.email,
          password: action.password)
      return {
        
        email: action.email,
        password: action.password
        // name: action.name,
        // id: action.id,
        // isSignedIn: action.isSignedIn
      };
      default:
        return state;
  }
}