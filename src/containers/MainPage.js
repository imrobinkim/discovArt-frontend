import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import LoginForm from "../components/LoginForm";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Slider className="slider-div" />
        <div className="main-page__right">
          {this.props.currentUser ? (
            <div className="main-page__logged-in">
              <div className="main-page__welcome">
                Welcome
                {this.props.currentUser && this.props.currentUser.first_name
                  ? `, ${this.props.currentUser.first_name}`
                  : ""}
                !
              </div>
              <Link to="/favorites" className="main-page__favorites">
                Go to My Favorites
              </Link>
            </div>
          ) : (
            <LoginForm />
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
