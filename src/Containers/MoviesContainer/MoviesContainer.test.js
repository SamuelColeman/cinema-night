 import React from 'react';
 import { shallow } from 'enzyme';
 import { MoviesContainer, mapStateToProps } from './MoviesContainer';


describe('MoviesContainerOfContainers', () => {

  describe('MoviesContainer',  () => {
    let wrapper;
    let mockHandleFavourite = jest.fn();
    let mockSignOutUser = jest.fn();
    let mockMovies = [
      { 
        id: 456,
        title: 'Harry Potter and the Sorceres Stone',
        poster_path: 'https://pottersworld.com',
        release_date: '10-02-10',
        popularity: 462.91,
        vote_avarage: 3775,
        overview: 'yada yada',
      },
      { 
        id: 457,
        title: 'Harry Potter and the Sorceres Stone',
        poster_path: 'https://pottersworld.com',
        release_date: '10-02-10',
        popularity: 462.91,
        vote_avarage: 3775,
        overview: 'yada yada',
      }
    ];
    let mockCurrentUser = {
        name: 'Bob',
        id: 1,
        isSignedIn: true
    };
    let mockFavouritesList = [
        { 
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          poster_path: 'https://pottersworld.com',
          release_date: '10-02-10',
          popularity: 462.91,
          vote_avarage: 3775,
          overview: 'yada yada',
        }
    ];


    beforeEach(() => {
      wrapper = shallow( <MoviesContainer 
        handleFavourite={mockHandleFavourite}
        signOutUser={mockSignOutUser}
        currentUser={mockCurrentUser}
        movies={mockMovies}
        favouritesList={mockFavouritesList}
      />)
    })

    it('should match snapshot with all data being passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })

  describe('mapStateToProps', () => {
    it('should return an object with the movies state', () => {
      const mockState = {
        movies: [{
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          popularity: 462.91,
          vote_count: 3775, 
          video: false,
          }],
          filter: 'GET_MOVIES'
      };

      const expected = {
        movies: [{
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          popularity: 462.91,
          vote_count: 3775, 
          video: false,
          }]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

})