import { movies } from '../reducers/movies';

describe('movies', () => {

    it('should return the initial state', () => {
        const expected = [];

        const result = movies(undefined, []);

        expect(result).toEqual(expected);
    })

    it.skip('should return state with an array of movies', () => {
        const action = {
          type: 'GET_MOVIES',
          movies: [{ 
            id: 456,
            title: 'Harry Potter and the Sorceres Stone',
            poster_path: 'https://pottersworld.com',
            release_date: '10-02-10',
            popularity: 462.91,
            vote_avarage: 3775,
            overview: 'yada yada',
          }]
        }

        const expected = [{ 
            id: 456,
            title: 'Harry Potter and the Sorceres Stone',
            poster_path: 'https://pottersworld.com',
            release_date: '10-02-10',
            popularity: 462.91,
            vote_avarage: 3775,
            overview: 'yada yada',
          }];

        const result = movies(undefined, action);
        expect(result).toEqual(expected);
    })
})