import React, { Component, Fragment } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <div>MainPage</div>
      </Fragment>
    )
  }
}

export default connect()(MainPage);