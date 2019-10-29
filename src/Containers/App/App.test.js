import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

import { currentMovies, addFavourite, deleteFavorite, getFavourites } from '../../apiCalls';


jest.mock('../../apiCalls');

describe('App', () => {

  let wrapper;
  let mockCurrentMovies;
  let mockMovies;
  let mockAddFavourite;
  let mockRemoveFavourite;
  let mockFavouriteList;
  let mockIsLoading = jest.fn();

    mockMovies = [{
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
      },
      {
        popularity: 222.00,
        vote_count: 4000,
        video: false,
        poster_path: "/apath.jpg",
        id: 111111,
        adult: false,
        backdrop_path: "anotherpath.jpg",
        original_language: "en",
        original_title: "Mock Movie1",
        genre_ids: [ 80, 18, 53 ],
        title: "Mock Movie1",
        vote_average: 8.6,
        overview: "A description about a movie.",
        release_date: "2019-10-04"
        },
        {
          popularity: 100.00,
          vote_count: 2000,
          video: false,
          poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          id: 475557,
          adult: false,
          backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
          original_language: "en",
          original_title: "Another movie",
          genre_ids: [ 80, 18, 53 ],
          title: "AnotherMovie",
          vote_average: 8.6,
          overview: "a really cool movie",
          release_date: "2019-10-04"
          }
    ]

    mockFavouriteList = { favorites: [
      {
        "poster_path": "/gibberish.jpg",
        "movie_id": 222222,
        "title": "A title",
        "vote_average": 11,
        "overview": "It's cool.",
        "release_date": "2019-10-18"
      }
    ]
  }
    const mockDisplayFavorites = jest.fn();
    const mockUser = {
      name:'Pants',
      id:2,
      email:'pants@gmail.com',
      isSignedIn: true
    }

      currentMovies.mockImplementation(() => {
        return Promise.resolve(mockMovies);
      }); 
      addFavourite.mockImplementation(() => {
        return Promise.resolve(mockMovies)
      })
      deleteFavorite.mockImplementation(() => {
        return Promise.resolve(mockMovies)
      })
      getFavourites.mockImplementation(() => {
        return Promise.resolve(mockFavouriteList)
      })
  

  beforeEach(() => {
    wrapper = shallow(<App 
        movies = {mockMovies}
        favouritesList = {mockFavouriteList}
        removeFavourite = {mockRemoveFavourite}
        currentUser = {mockUser}
        isLoading = {mockIsLoading}
     />)
 })

  it('should match snapshot with correct data passing through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update loading and fetch movies', () => {
    expect(mockIsLoading).toHaveBeenCalledWith(true);
    expect(currentMovies).toHaveBeenCalled();
    expect(mockIsLoading).toHaveBeenCalledWith(false);
  });

  it('should invoke get favourites when display favourites is called', async () => {
  await wrapper.instance().displayFavourites(mockUser.id)
  expect(getFavourites).toHaveBeenCalledWith(mockUser.id);
  });

  it('should clear currentUser and favouritesList when signOutUser is called', () => {
    wrapper.instance().signOutUser();
    expect(mockUser).toEqual({ email: '', name: '', id: null, isSignedIn: false });
    expect(mockFavouriteList.favorites).toEqual([]);
  });
})



  
