import { signUp } from '../reducers/signUp';

it('should return the initial state', () => {
    const expected = {};

    const result = signUp(undefined, {});

    expect(result).toEqual(expected);
});

it('should return state with a new updated List', () => {

    const mockFavList = {
      type: 'FAVOURITES_LIST',
        name: action.name,
        email: action.email,
        password: action.password
    }
    const expected = mockList;
    const result = signUp(undefined, mockFavList);
    expect(result).toEqual(expected);
})