export const password = (state = '', action) => {
    switch(action.type) {
      case 'GET_PASSWORD':
        return action.password;
      default:
        return state;
    }
  }