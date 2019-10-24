import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getEmail, getPassword } from '../../actions';
import { login } from '../../actions'

class Form extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  verifySignUp = (e) => {
    e.preventDefault()
    console.log('state', this.state)
    // const { login } = this.props;
    login({
     email: this.state.email,
     password: this.state.password
    })
  }

  verifySignIn = (e) => {
    e.preventDefault()
  }

   render() {
     const { email, password } = this.state;
    return (
        <form>
            <input placeholder='Email' 
                   type='email'
                   name='email'
                   value={email} 
                   onChange={this.handleChange} />
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

export const mapStateToProps = ({ email, password }) => ({
    email,
    password
})

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      login,
      // getPassword
    }, dispatch)
)

export default Form;
// export default connect(mapStateToProps)(Form);