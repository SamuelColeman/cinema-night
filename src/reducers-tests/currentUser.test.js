import { currentUser } from '../reducers/currentUser';

describe('currentUser', () => {

  it('should return the initial state', () => {
      const expected = {};

      const result = currentUser(undefined, {});

      expect(result).toEqual(expected);
  });

  it('should return state with a new user', () => {
     const mockUser = {
        type: 'LOGIN_USER',
        name: 'Bob',
        id: 5,
        isSignedIn: false
      }; 
    
      const expected = { 
        name: 'Bob',
        id: 5,
        isSignedIn: false
      };

      const result = currentUser(undefined, mockUser);

      expect(result).toEqual(expected);
  })
})