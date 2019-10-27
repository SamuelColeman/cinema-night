import { currentMovies, addFavourite, deleteFavorite, getFavourites, loginVerification } from './apiCalls';

 describe('apiCalls', () => {  

    let mockCurrentMovie;

    beforeEach(() => {
        mockCurrentMovie = {
            popularity: 462.91,
            vote_count: 3775,
            video: false,
            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            original_language: "en",
            original_title: "Joker",
            genre_ids: [ 80, 18, 53 ],
            title: "Joker",
            vote_average: 8.6,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            release_date: "2019-10-04"
            }

      window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
              ok: true,
              json: () => Promise.resolve(mockCurrentMovie)
          })
      })
    })

    it('should fetch with the correct URL ', () => {
        currentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2');

        expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2');
    });

    it('should return movies data (Happy Path)', () => {
        currentMovies().then(results => expect(results).toEqual(mockCurrentMovie))
    });

    it('should return an error if response is not ok (Sad Path)', () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
              ok: false
          });
        })
    });

    it('should return an error if fetch fails ', () => {
      window.fetch = jest.fn().mockImplementation(() => {
          return Promise.reject(Error('Failed to fetch'))
      });
      expect(currentMovies()).rejects.toEqual(Error('Failed to fetch'));
    });


    describe('loginVerification', () => {
        let mockLogin = {
            email: 'bob@gmail.com',
            password: 'bobstheword1234'
          }

          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCurrentMovie)
                })
            })
          })

        it('should fetch the correct arguments', () => {
            const expected = ['http://localhost:3001/api/v1/login', {
                method: 'POST',
                body: JSON.stringify(mockLogin),
                headers: {
                  'Content-Type': 'application/json'
                }
              }];
    
            loginVerification(mockLogin);

            expect(window.fetch).toHaveBeenCalledWith(...expected);
        })
    });

    describe('signUpVerification', () => {
        let mockVerification = {
            name: 'Bob',
            email: 'bob@gmail.com',
            password: 'bobstheword1234'
          }

          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCurrentMovie)
                })
            })
          })

          it('should fetch correct arguments', () => {
              const expected = [ 'http://localhost:3001/api/v1/users', ]
          })
    });

    describe('addFavourite', () => {
        let  mockAddFavourite = mockCurrentMovie;
    });

    describe('getFavourites', () => {
        let mockGetFavourites = [mockCurrentMovie];
    });

    describe('deleteFavorite', () => {
        let mockDeleteFavorite = '204 status code, no response body content';
    });


 })