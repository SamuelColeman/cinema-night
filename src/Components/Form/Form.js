import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getEmail, getPassword } from '../../actions';
import { login, signUp } from '../../actions'
// import { Redirect } from 'react-router-dom';
import { loginVerification, signUpVerification } from '../../apiCalls'

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
    console.log(this.state)
  }

  verifySignIn = async e => {
    e.preventDefault()
    console.log('state', this.state)
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
      console.log(this.props.name)
      this.setState({ error: ''})
    } else {
      this.setState({error:resp.error.details})
     
    }
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
            <input placeholder='Email' 
                   type='email'
                   name='email'
                   value={email} 
                   onChange={this.handleChange} />
            <h1>{error}</h1>
            <input placeholder='Password must 8 characters' 
                   type='password'
                   name='password'
                   value={password} 
                   minLength='8' 
                   onChange={this.handleChange} />
            <button onClick={this.verifySignUp}>Sign Up</button>
            <button onClick={this.verifySignIn}>Sign In</button>
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
    signUp: info  => dispatch(signUp(info))
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Form);