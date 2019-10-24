export const users = (state = {}, action) => {
  console.log('users state -->', state)
  console.log('users actions--->', action)
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
  console.log('users state -->', state)
}