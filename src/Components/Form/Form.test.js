import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import { login, signUp, favouritesList, hasError } from '../../actions';


describe('FormContainer',  () => {

    describe('Form', () => {
       // test handleChange
       let wrapper; 

       beforeEach(() => {
           wrapper = shallow (<Form />)
       })

       it('should match snapshot with all information passing through', () => {
           expect(wrapper).toMatchSnapshot();
       })

       it('should update local state of email when handle change is invoked', () => {
           const mockEvent = { target : {
               name: 'email',
               value: 'bob@gmail.com',
           } }

           const expected = 'bob@gmail.com';

           wrapper.instance().handleChange(mockEvent);

           expect(wrapper.state('email')).toEqual(expected);
       })

       it('should update local state of password when handle change is invoked', () => {
        let mockEvent = { target : {
            name: 'password',
            value: 'bobstheword1234',
        } }

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
      it('should dispatch login when verifySignIn is called',  () => {
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