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
          
  })
        