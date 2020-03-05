import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import LogInForm from "../components/LogInForm";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Slider className="slider-div" />
        <div className="login-form-div">
          {this.props.currentUser ? (
            <div>Go to My Favorites</div>
          ) : (
            <LogInForm />
          )}
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

export default connect(mapStateToProps)(MainPage);
