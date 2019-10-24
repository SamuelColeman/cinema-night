import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmail, getPassword } from '../../actions';

class Form extends Component{
 
   handleEmail = (e) => {
    const { getEmail } = this.props;
    // console.log(e.target.value);
    getEmail(e.target.value);
   }

   handlePassword = (e) => {
    const { getPassword } = this.props;
    getPassword(e.target.value);
   }

   render() {
     const { email, password } = this.props;
    return (
        <form>
            <input placeholder='Email' 
                   type='email'
                   name='email'
                   value={email} 
                   onChange={this.handleEmail} />
            <input placeholder='Password must 8 characters' 
                   type='password'
                   name='password'
                   value={password} 
                   minLength='8' 
                   onChange={this.handlePassword} />
            <button>Sign Up</button>
            <button>Sign In</button>
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
      getEmail,
      getPassword
    }, dispatch)
)

export default connect(mapStateToProps)(Form);