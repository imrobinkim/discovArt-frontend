import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";

class LoginPage extends Component {
  render() {
    return this.props.currentUser ? (
      <Redirect to="/" />
    ) : (
      <div className="login-page">
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(LoginPage);
