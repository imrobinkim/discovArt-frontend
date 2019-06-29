import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './containers/NavBar';
import MainPage from './containers/MainPage';
import SignUpPage from './components/SignUpPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(connect()(App));
