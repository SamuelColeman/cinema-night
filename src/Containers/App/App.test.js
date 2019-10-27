import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { currentMovies } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {

  let wrapper;
  let mockCurrentMovie;

  beforeEach(() => {
    wrapper = shallow(<App />)

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

      currentMovies.mockImplementation(() => {
        return Promise.resolve(mockCurrentMovie);
      }); 
  })

  it.skip('should match snapshot with correct data passing throught', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should call getMovies when componentDidMount is called', () => {
    wrapper.instance().componentDidMount();

    expect(currentMovies).toHaveBeenCalled();
  })

  // test isLoading to have been called
  // test hasError to have been called
  // test change of state, will need to go over redux testing class
})

 