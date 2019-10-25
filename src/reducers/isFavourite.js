export const favourite = (state = false, action) => {
  switch(action.type) {
    case 'IS_FAVOURITE':
      return action.bool;
    default:
      return state
  }
}