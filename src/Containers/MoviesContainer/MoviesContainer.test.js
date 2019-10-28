 import React from 'react';
 import { shallow } from 'enzyme';
 import MoviesContainer from './MoviesContainer';


 describe('MoviesContainer',  () => {
    let wrapper;
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
                movies = {mockMovies}
                errorMsg= 'Error'
      />)
    })

    it('should match snapshot with all data being passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })