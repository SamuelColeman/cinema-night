export const users = (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_UP_USER':
      return {
        name: action.name,
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
}