import { isLoading } from '../reducers/isLoading';

describe('isLoading', () => {

    it('should return the initial state', () => {
        const expected = false;

        const result = isLoading(undefined, false);

        expect(result).toEqual(expected);
    })

    it('should return state with true', () => {
        const action = {
          type: 'IS_LOADING',
          isLoading: true
        }

        const expected = true;

        const result = isLoading(undefined, action);
        expect(result).toEqual(expected);
    })
})