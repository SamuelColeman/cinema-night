import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { login, signUp, favouritesList, hasError } from '../../actions';
import { loginVerification, signUpVerification, getFavourites } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('FormContainer',  () => { 
   
    describe('Form', () => {
       let wrapper; 
       let mockCurrentUser = {
        name: 'Bob',
        id: 1,
        isSignedIn: true
       };
       let mockLogin = mockCurrentUser;
       let mockSignUp = {
          name: 'Bob',
          email: 'bob@gmail.com',
          password: 'bob12345'
       };
       let mockFavouritesList = [
        { 
          id: 456,
          title: 'Harry Potter and the Sorceres Stone',
          poster_path: 'https://pottersworld.com',
          release_date: '10-02-10',
          popularity: 462.91,
          vote_avarage: 3775,
          overview: 'yada yada',
        }
       ];
       let mockError = 'Error';
  

       beforeEach(() => {
           wrapper = shallow (<Form 
                currentUser={mockCurrentUser} 
                login={mockLogin} 
                signUp={mockSignUp} 
                favouritesList={mockFavouritesList} 
                hasError={mockError} />);

          loginVerification.mockImplementation(() => {
              return Promise.resolve(mockLogin);
          });

          signUpVerification.mockImplementation(() => {
              return Promise.resolve(mockSignUp);
          });

          getFavourites.mockImplementation(() => {
              return Promise.resolve(mockCurrentUser.id);
          })
       })

       it('should match snapshot with all information passing through', () => {
           expect(wrapper).toMatchSnapshot();
       })

       it('should update state when verifySignIn is called', () => {
         const mockEvent = {
           preventDefault: jest.fn()
         }

         wrapper.setState({ email: 'bob@gmail.com', password: 'bob1234' });
         wrapper.instance().verifySignIn(mockEvent);
         expect(loginVerification).toHaveBeenCalledWith({ email: 'bob@gmail.com', password: 'bob1234'});
       })

       it('should call loginVerification fetch when verifySignIn is called', () => {
        wrapper.instance().verifySignIn();
        expect(loginVerification).toHaveBeenCalled();
      })

      it('should update state when showFavourites is called', () => {
          let mockMovieId = 4567;
          wrapper.setState({ id: mockMovieId });
          wrapper.instance().showFavourites(mockMovieId);
          expect(getFavourites).toHaveBeenCalledWith(mockMovieId);
      })

      it('should call getFavourites fetch when showFavourites is called', () => {
        wrapper.instance().showFavourites();
        expect(getFavourites).toHaveBeenCalled();
      })

      it('should update state when verifySignUp is called', () => {
        const mockEvent = {
          preventDefault: jest.fn()
        }
        wrapper.setState({ name: 'pants', email: 'bob@gmail.com', password: 'bob1234'});
        wrapper.instance().verifySignUp(mockEvent);
        expect(signUpVerification).toHaveBeenCalledWith({ name: 'pants', email: 'bob@gmail.com', password: 'bob1234'});
      })

      it('should call signUpVerification fetch when verifySignUp is called', () => {
        wrapper.instance().verifySignUp();
        expect(signUpVerification).toHaveBeenCalled();
      })

       it('should update local state of email when handle change is invoked', () => {
           const mockEvent = { 
               target : {
               name: 'email',
               value: 'bob@gmail.com',
             } 
           }

           const expected = 'bob@gmail.com';

           wrapper.instance().handleChange(mockEvent);

           expect(wrapper.state('email')).toEqual(expected);
       })

       it('should update local state of password when handle change is invoked', () => {
         let mockEvent = { 
           target : {
             name: 'password',
             value: 'bobstheword1234',
           } 
         };

         const expected = 'bobstheword1234';
 
         wrapper.instance().handleChange(mockEvent);

         expect(wrapper.state('password')).toEqual(expected);
       })

       it('should call verifySignIn when sign in button is clicked', () => {
           wrapper.instance().verifySignIn = jest.fn();

           const mockEvent = { preventDefault: jest.fn() };

           wrapper.instance().forceUpdate();

           wrapper.find('button').at(1).simulate('click', mockEvent);

           expect(wrapper.instance().verifySignIn).toHaveBeenCalled();
       })

       it('should call verifySignUp when sign up button is clicked', () => {
          wrapper.instance().verifySignUp = jest.fn();

          const mockEvent = { preventDefault: jest.fn() };

          wrapper.instance().forceUpdate();

          wrapper.find('button').at(0).simulate('click', mockEvent);

          expect(wrapper.instance().verifySignUp).toHaveBeenCalled();
    })

    it('should redirect back to main page when button is clicked', () => {
       let wrapper = mount(
           <MemoryRouter initialEntries={['/' ]}>
              <Link to='/' >
                <button type='button'>Back To Movies</button> 
              </Link>
           </MemoryRouter >
       )

       expect(wrapper.find(Link)).toHaveLength(1);
    })
       // test verifySignIn async
       // showFavourites async
       // verifySignUp async
       // snapshot test

    });

    describe('mapStateToProps', () => {
       it('should return a current user when checking state', () => {
          const mockState = {
             currentUser : {
                name : 'Bob',
                id: 1,
                isSignedIn: true
             },
             filter: 'LOGIN_USER'
          }

          const expected = {
            currentUser : {
                name : 'Bob',
                id: 1,
                isSignedIn: true
             }
          }

          const mappedProps = mapStateToProps(mockState);

          expect(mappedProps).toEqual(expected);
       })
    });

    describe('mapDispatchToProps', () => {
      //login
      it.skip('should dispatch login when verifySignIn is called',  () => {
          const mockDispatch = jest.fn();
          const actionToDispatch = login('Bob', 1, false);

          const mappedProps = mapDispatchToProps(mockDispatch);
          mappedProps.verifySignIn();

          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })
      //signup
      //favouritesList
      //hasError
    });
})