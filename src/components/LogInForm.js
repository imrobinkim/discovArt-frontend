import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { BASE_URL, logUserIn } from "../redux/actionCreators";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogIn = e => {
    e.preventDefault();

    // Fetch user from here so that we can display approp. error message for relavant/current LoginForm
    // instead of keeping track of a global error state object (via reducer & actionCreator).
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(returnedData => {
        if (returnedData.error) {
          // Display appropriate errors on form if unable to log in.
          this.setState({ errors: returnedData.errors });
        } else {
          // Otherwise, log in user (save in localStorage & set global state).
          this.props.logUserIn(returnedData);
        }
      });
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleLogIn}>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
            {this.state.errors && this.state.errors.email ? (
              <div className="error">{this.state.errors.email}</div>
            ) : null}
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
            {this.state.errors && this.state.errors.password ? (
              <div className="error">{this.state.errors.password}</div>
            ) : null}
          </label>
          <input type="submit" value="Log In" />
        </form>
        <div className="sign-up-option">
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: logInData => {
      dispatch(logUserIn(logInData));
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
