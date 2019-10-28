 import React from 'react';
 import { shallow } from 'enzyme';
 import { MoviesContainer, mapStateToProps } from './MoviesContainer';


describe('MoviesContainerOfContainers', () => {

  describe('MoviesContainer',  () => {
    let wrapper;
    let mockFunction = jest.fn();
    const mockMovies = [
        {
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          popularity: 462.91,
          vote_count: 3775,
          video: false,
        },
        {
            id: 123,
            title: 'Harry Potter and the Sorceres Stone',
            popularity: 462.91,
            vote_count: 3775,
            video: false,
          }
    ]

    beforeEach(() => {
      wrapper = shallow( <MoviesContainer 
            signOutUser={mockFunction}
            selectMovie={mockFunction}
      />)
    })

    it.skip('should match snapshot with all data being passed in correctly', () => {
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