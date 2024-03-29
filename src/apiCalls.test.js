import { currentMovies, addFavourite, deleteFavorite, getFavourites, loginVerification, signUpVerification } from './apiCalls';

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

        it('should return movies data (Happy Path)', () => {
          loginVerification().then(results => expect(results).toEqual(mockLogin))
        });
  
        it('should return an error if response is not ok (Sad Path)', () => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: false
              });
            })
        });
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
              const expected = [ 'http://localhost:3001/api/v1/users',{
                method: 'POST',
                body: JSON.stringify(mockVerification),
                headers: {
                  'Content-Type': 'application/json'
                }
              }];
              signUpVerification(mockVerification);

              expect(window.fetch).toHaveBeenCalledWith(...expected);
          });
          
          it('should return movies data (Happy Path)', () => {
            signUpVerification().then(results => expect(results).toEqual(mockVerification))
          });
    
          it('should return an error if response is not ok (Sad Path)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                  ok: false
              });
            })
          });
          
    });

    describe('addFavourite', () => {
        let mockAddFavourite = mockCurrentMovie;
        let mockId = 475557;

        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCurrentMovie)
                })
            })
          })

        it('should fetch correct arguments', () => {
          const expected = [`http://localhost:3001/api/v1/users/${mockId}/moviefavorites`, {
            method: 'POST',
            body: JSON.stringify(mockAddFavourite),
            headers: {
              'Content-Type': 'application/json'
            }
          }];

          addFavourite(mockAddFavourite, mockId);

          expect(window.fetch).toHaveBeenCalledWith(...expected);
        });

        it('should return movies data (Happy Path)', () => {
          addFavourite().then(results => expect(results).toEqual(mockAddFavourite, mockId))
        });
  
        it('should return an error if response is not ok (Sad Path)', () => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: false
            });
          })
        });
    });

    describe('getFavourites', () => {
        let mockId = 475557;
        let mockFavourites = [mockCurrentMovie];

        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCurrentMovie)
                })
            })
          });

        it('should fetch with the correct URL ', () => {
            getFavourites(mockId);
            expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${mockId}/moviefavorites`)
        })

        it('should return favourites data (Happy Path)', () => {
            getFavourites(mockId).then(results => expect(results).toEqual(mockFavourites));
        })

        it('should return an error if response is not ok (Sad Path)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                  ok: false
              });
            })
        })
    
        it('should return an error if fetch fails ', () => {
          window.fetch = jest.fn().mockImplementation(() => {
              return Promise.reject(Error('Failed to fetch'))
          });
          expect(getFavourites()).rejects.toEqual(Error('Failed to fetch'));
        })
    });

    describe('deleteFavorite', () => {
        let mockDeleteFavorite = '204 status code, no response body content';
        let userId = 1;
        let mockId = 475557;
        
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCurrentMovie)
                })
            })
          });

          it('should fetch correct arguments', () => {
              const expected = [`http://localhost:3001/api/v1/users/${userId}/moviefavorites/${mockId}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              }];

              deleteFavorite(userId, mockId);
              expect(window.fetch).toHaveBeenCalledWith(...expected);
          });

          it('should return movies data (Happy Path)', () => {
            deleteFavorite().then(results => expect(results).toEqual(userId, mockId))
          });
    
          it('should return an error if response is not ok (Sad Path)', () => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                  ok: false
              });
            })
          });
    });


 })