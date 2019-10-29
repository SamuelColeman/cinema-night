import { password } from '../reducers/password';

describe('password', () => {

    it('should return the initial state', () => {
        const expected = '';

        const result = password(undefined, '');

        expect(result).toEqual(expected);
    })

    it('should return state with password', () => {
        const action = {
          type: 'GET_PASSWORD',
          password: '12345'
        }

        const expected = '12345';

        const result = password(undefined, action);
        expect(result).toEqual(expected);
    })
})