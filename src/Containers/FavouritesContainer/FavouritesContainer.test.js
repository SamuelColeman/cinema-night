import React from 'react';
 import { shallow } from 'enzyme';
 import { FavouritesContainer, mapStateToProps } from './FavouritesContainer';


describe('Favourites Container', () => {
    let wrapper;
    let mockHandleFavourite = jest.fn();
    let mockFavouritesList = [
        {
          "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
          "movie_id": 420809,
          "title": "Maleficent: Mistress of Evil",
          "vote_average": 7.1,
          "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
          "release_date": "2019-10-18"
        },
        {
          "poster_path": "/gibberish.jpg",
          "movie_id": 222222,
          "title": "A title",
          "vote_average": 11,
          "overview": "It's cool.",
          "release_date": "2019-10-18"
        }
    ];

    beforeEach(() => {
      wrapper = shallow( <FavouritesContainer 
        handleFavourite={mockHandleFavourite}
        favouritesList={mockFavouritesList}
      />)
    })

    it('should match snapshot with all data being passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })

