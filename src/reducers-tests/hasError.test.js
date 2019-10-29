import { hasError } from '../reducers/email';

describe('hasError', () => {
    it.skip('should return initial state', () => {
        const expected = '';

        const result = hasError(undefined, '');

        expect(result).toEqual(expected);
    })

    it('should return state with an error', () => {
       const mockAction = {
           type: 'GET_EMAIL',
           errorMsg: 'Testing Sucks'
       }

       const expected = 'Testing Sucks'

       const result = hasError(undefined, mockAction);

       expect(result).toEqual(expected);
    })
})