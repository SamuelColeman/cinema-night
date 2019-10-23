export const email = (state = '', action) => {
    console.log('is running')
  switch(action.type) {
    case 'GET_EMAIL':
      return action.email;
    default:
      return state;
  }
}