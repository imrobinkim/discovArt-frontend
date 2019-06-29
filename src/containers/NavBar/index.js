import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div>NavBar</div>
      </Fragment>
    )
  }
}

export default withRouter(connect()(NavBar));