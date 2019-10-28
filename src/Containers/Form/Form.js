import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signUp, favouritesList, hasError } from '../../actions'
import MoviesContainer from '../../Components/MoviesContainer/MoviesContainer'
import { Route, Link } from 'react-router-dom';
import { loginVerification, signUpVerification, getFavourites } from '../../apiCalls'

class Form extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  verifySignIn = async e => {
    const { hasError } = this.props;
    e.preventDefault()
    const resp = await loginVerification({
      email: this.state.email,
      password: this.state.password
    })
    if(resp.id) {
      this.props.login({
        name:resp.name,
        id: resp.id,
        isSignedIn: true
      })
      this.showFavourites(resp.id)
      hasError('');
    }
      if(resp.error !== undefined) {
        this.setState({error: 'Email and password do not match.'})
      } else {
      this.setState({error: ''})
    }
  }

  showFavourites = async (id) => {
      const resp = await getFavourites(id);
      if(resp.favorites) {
        this.props.favouritesList({favorites: resp.favorites })
      }
      if(resp.error !== undefined) {
        this.setState({error: 'Failed to fetch favourites.'})
      } else {
      this.setState({error: ''})
    }
    console.log(resp.favorites)
  }

  verifySignUp = async e => {
    e.preventDefault()
    const resp = await signUpVerification({
      name: 'pants',
      email: this.state.email,
      password: this.state.password
    })
    if(resp.error !== undefined) {
      this.setState({error: 'Email is taken, try another.'})
    } else {
      this.setState({error: ''})
    }
    if(!resp.email) {
      this.props.signUp({
       name: 'pants',
       email: this.state.email,
       password: this.state.password
      })
    } 
  }

   render() {
     const { email, password, error } = this.state;
    return (
        <form>
            <h2>Email:</h2>
            <input placeholder='Email' 
                   type='email'
                   name='email'
                   value={email} 
                   onChange={this.handleChange} />
            <h1>{error}</h1>
            <h2>Password:</h2>
            <input placeholder='Password must 8 characters' 
                   type='password'
                   name='password'
                   value={password} 
                   minLength='8' 
                   onChange={this.handleChange} />
            <button onClick={this.verifySignUp}>Sign Up</button>
            <button onClick={this.verifySignIn}>Sign In</button>
            <Link to='/' >
              <button type='button'>Back To Movies</button> 
            </Link>
        </form>
      )
   }
}

export const mapStateToProps = ({ currentUser, users }) => ({
    currentUser,
    users
})

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    login: info => dispatch(login(info)),
    signUp: info  => dispatch(signUp(info)),
    favouritesList: info => dispatch(favouritesList(info)),
    hasError: info => dispatch(hasError(info))
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);