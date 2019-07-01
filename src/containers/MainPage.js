import React, { Component, Fragment } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from '../components/Slider';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
      </Fragment>
    )
  }
}

export default connect()(MainPage);