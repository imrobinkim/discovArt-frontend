import React, { Component } from 'react';

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

  handleCreateUser() {
    console.log('attempting to log in')
  }

  render() {
    return (
      <form method="post" className="sign-up-form" onSubmit={this.handleCreateUser}>
        <label>
          Email:
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required />
        </label>
        <label>
          Password:
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange} required />
        </label>
        <input type="submit" value="Log In" />
      </form>
    )
  }
}

export default LogInForm;