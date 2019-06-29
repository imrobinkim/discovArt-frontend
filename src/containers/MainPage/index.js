import React, { Component, Fragment } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogInForm from '../../components/LogInForm';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <div>MainPage</div>
        <LogInForm />
      </Fragment>
    )
  }
}

export default connect()(MainPage);