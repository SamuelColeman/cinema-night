import React from 'react';
import { shallow } from 'enzyme';
import { FavouriteCard, mapStateToProps } from './FavouriteCard';

    describe('FavouriteCard', () => {
        let wrapper;
        let mockHandleFavourite = jest.fn();
        let mockSelectedMovie = {
          "poster_path": "/gibberish.jpg",
          "movie_id": 222222,
          "title": "A title",
          "vote_average": 11,
          "overview": "It's cool.",
          "release_date": "2019-10-18"
        }
        let mockError ='Error'

        beforeEach(() => {
          wrapper = shallow(<FavouriteCard 
            key={mockSelectedMovie.movie_id}
            movie={mockSelectedMovie}
            handleFavourite={mockHandleFavourite}
            hasError={mockError}
          />)
        })
    
        it('should match snapshot with all data passing through correctly', () => {
            expect(wrapper).toMatchSnapshot();
  })

})
        