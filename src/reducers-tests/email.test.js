import { email } from '../reducers/email';

describe('email', () => {
    it('should return initial state', () => {
        const expected = '';

        const result = email(undefined, '');

        expect(result).toEqual(expected);
    })

    it('should return state with email', () => {
       const mockEmailInfo = {
           type: 'GET_EMAIL',
           email: 'bob@gmail.com'
       }

       const expected = 'bob@gmail.com'


       const result = email(undefined, mockEmailInfo);
       expect(result).toEqual(expected);
    })
})