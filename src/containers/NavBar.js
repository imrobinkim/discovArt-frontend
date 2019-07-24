import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logUserOut } from '../redux/actionCreators';

class NavBar extends Component {
  logUserOut() {
    this.props.logUserOut();
    localStorage.setItem('token', '');
  }

  render() {
    return (
      this.props.currentUser ? 
      <div className="navbar">
        <NavLink to="/" className="navbar-logo">dA</NavLink>
        <div className="navbar-list">
          <NavLink to="/search" activeClassName="current">Collection</NavLink>
          <NavLink to="/map" activeClassName="current">Map</NavLink>
          <Link to="/" onClick={() => this.logUserOut()}>Log Out</Link>
        </div>
      </div>
      : 
      <div className="navbar">
        <NavLink to="/" className="navbar-logo">dA</NavLink>
        <div className="navbar-list">
          <NavLink to="/search" activeClassName="current">Collection</NavLink>
          <NavLink to="/map" activeClassName="current">Map</NavLink>
          <NavLink to="/login" activeClassName="current">Log In</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => { dispatch(logUserOut()) } 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));