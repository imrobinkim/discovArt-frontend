import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div class="navbar">
        <NavLink to="/" className="navbar-logo">dA</NavLink>
        <div class="navbar-list">
          <NavLink to="/search" activeClassName="current">Collection</NavLink>
          <NavLink to="/map" activeClassName="current">Map</NavLink>
          <NavLink to="/login" activeClassName="current">Log In</NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(NavBar));