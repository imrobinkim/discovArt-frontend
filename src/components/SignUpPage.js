import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../redux/actionCreators';

class SignUpPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCreateUser = (e) => {
    console.log('attempting to create new user')
    // debugger
    e.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    return(
      <form className="signup-form" onSubmit={this.handleCreateUser}>
        <label>
          First Name:
          <input type="text" name="first_name" placeholder="First name" onChange={this.handleChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" placeholder="Last name" onChange={this.handleChange} required />
        </label>
        <label>
          Email:
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUserData) => { dispatch(createUser(newUserData)) },
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);