import React, { Component, Fragment } from "react";
import { Route, NavLink, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./containers/NavBar";
import MainPage from "./containers/MainPage";
import LogInForm from "./components/LogInForm";
import SignUpPage from "./containers/SignUpPage";
import CollectionPage from "./containers/CollectionPage";
import ArtworkPage from "./containers/ArtworkPage";
import { setUserUsingToken } from "./redux/actionCreators";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      this.props.setUserUsingToken(token);
    }
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/login"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <div className="login">
                  <LogInForm />
                  <div className="sign-up-option">
                    Don't have an account?{" "}
                    <NavLink to="/signup">Sign Up</NavLink>
                  </div>
                </div>
              );
            }}
          />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/browse" component={CollectionPage} />
          <Route exact path="/artworks/:id" component={ArtworkPage} />
        </Switch>
      </Fragment>
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
    setUserUsingToken: token => {
      dispatch(setUserUsingToken(token));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
