import React from 'react';
 import { shallow } from 'enzyme';
 import { MoviePage } from './MoviePage';


describe('MoviePage', () => {
    let wrapper;
    let mockMovie = [
        {
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          poster_path: 'https://pottersworld.com',
          release_date: '10-02-10',
          popularity: 462.91,
          vote_avarage: 3775,
          overview: 'yada yada',
        },
    ];

    beforeEach(() => {
      wrapper = shallow( <MoviePage 
        mockMovie = {mockMovie}
      />)
    })

    it('should match snapshot with all data being passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })

  