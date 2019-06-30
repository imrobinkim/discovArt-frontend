import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../redux/actionCreators';

class LogInForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogIn = (e) => {
    e.preventDefault();
    this.props.logInUser(this.state)
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleLogIn}>
        <label>
          Email 
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required />
        </label>
        <label>
          Password 
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Log In" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (logInData) => { dispatch(logInUser(logInData)) }
  }
}

export default connect(null, mapDispatchToProps)(LogInForm);