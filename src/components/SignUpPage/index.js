import React, { Component } from 'react';

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

  handleCreateUser() {
    console.log('attempting to create new user')
  }

  render() {
    return(
      <form method="post" className="sign-up-form" onSubmit={this.handleCreateUser}>
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
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SignUpPage;