import { favouritesList } from '../reducers/favouritesList';


describe('favoritesList', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favouritesList(undefined, []);

    expect(result).toEqual(expected);
});

it.skip('should return state with a new updated List', () => {
    let mockList = [{ 
              id: 456,
              title: 'Harry Potter and the Sorceres Stone',
              poster_path: 'https://pottersworld.com',
              release_date: '10-02-10',
              popularity: 462.91,
              vote_avarage: 3775,
              overview: 'yada yada',
            }];

    const mockFavList = {
      type: 'FAVOURITES_LIST',
      favorites: [{ 
        id: 456,
        title: 'Harry Potter and the Sorceres Stone',
        poster_path: 'https://pottersworld.com',
        release_date: '10-02-10',
        popularity: 462.91,
        vote_avarage: 3775,
        overview: 'yada yada',
      }]
    }
    const expected = mockList;
    const result = favouritesList(undefined, mockFavList);
    expect(result).toEqual(expected);
})
})