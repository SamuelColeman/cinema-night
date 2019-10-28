 import React from 'react';
 import { shallow } from 'enzyme';
 import MovieCard from './MovieCard';

 describe('MovieCard', () => {

    let wrapper;
    let mockFunction = jest.fn();
    let chosenMovie =  {
        id: 456,
        title: 'Harry Potter and the Sorceres Stone',
        popularity: 462.91,
        vote_count: 3775, 
        video: false,
      }

    beforeEach(() => {
      wrapper = shallow(<MovieCard 
        key={chosenMovie.id}
        removeFavourite={mockFunction}
        handleFavourite={mockFunction}
        selectMovie={mockFunction}
        {...chosenMovie}
      />)
    })

    it('should match snapshot with all data passing through correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })