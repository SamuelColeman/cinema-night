import { hasError } from '../reducers/hasError';

describe('hasError', () => {
    it('should return initial state', () => {
        const expected = '';

        const result = hasError(undefined, '');

        expect(result).toEqual(expected);
    })

    it('should return state with an error', () => {
       const mockAction = {
           type: 'HAS_ERROR',
           errorMsg: 'Testing Sucks'
       }

       const expected = 'Testing Sucks'

       const result = hasError(undefined, mockAction);
       expect(result).toEqual(expected);
    })
})