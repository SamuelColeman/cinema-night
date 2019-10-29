import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps } from './MovieCard';

describe('MovieCardContainer', () => {

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
            selectMovie={mockFunction}
            {...chosenMovie}
          />)
        })
    
        it.skip('should match snapshot with all data passing through correctly', () => {
            expect(wrapper).toMatchSnapshot();
        })
     })

     describe('mapStateToProps', () => {
        it('should return an object with the movies state',  () => {
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