import { users } from '../reducers/signUp';

describe('signUp', () => {
    it('should return the initial state', () => {
        const expected = {};
    
        const result = users(undefined, {});
    
        expect(result).toEqual(expected);
    });
    
    it('should return state with a new updated List', () => {
    
        const mockList = {
          type: 'SIGN_UP_USER',
            name: 'Bob',
            email: 'bob@gmail.com',
            password: '12345'
        }
    
        const expected = {
            name: 'Bob',
            email: 'bob@gmail.com',
            password: '12345'
        };
        const result = users(undefined, mockList);
        expect(result).toEqual(expected);
    })
})