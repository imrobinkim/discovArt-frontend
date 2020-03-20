import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./containers/NavBar";
import MainPage from "./containers/MainPage";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import CollectionPage from "./containers/CollectionPage";
import FavoritesPage from "./containers/FavoritesPage";
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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/browse" component={CollectionPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
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
