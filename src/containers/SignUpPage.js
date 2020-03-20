import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { BASE_URL, logUserIn } from "../redux/actionCreators";

class SignUpPage extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    errors: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreateUser = e => {
    e.preventDefault();

    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
        }
      })
    })
      .then(res => res.json())
      .then(returnedData => {
        if (returnedData.error) {
          // Display appropriate errors on form if unable to sign user up.
          this.setState({ errors: returnedData.errors });
        } else {
          // Otherwise, log in newly created user (save in localStorage & set global state).
          this.props.logUserIn(returnedData);
        }
      });
  };

  render() {
    return this.props.currentUser ? (
      <Redirect to="/" />
    ) : (
      <div className="signup-page">
        {this.state.errors ? (
          <div className="error">{this.state.errors[0]}</div>
        ) : null}
        <form className="signup-form" onSubmit={this.handleCreateUser}>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="sign-up-option">
          Already have an account? <NavLink to="/login">Log In</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logUserIn: newUserData => {
      dispatch(logUserIn(newUserData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
