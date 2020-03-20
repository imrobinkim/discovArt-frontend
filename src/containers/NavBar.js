import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logUserOut } from "../redux/actionCreators";

class NavBar extends Component {
  handleUserLogOut() {
    this.props.logUserOut();
  }

  render() {
    return this.props.currentUser ? (
      <div className="navbar">
        <NavLink to="/" className="navbar-logo">
          dA
        </NavLink>
        <div className="navbar-list">
          <NavLink to="/browse" activeClassName="current">
            Collection
          </NavLink>
          <NavLink to="/favorites" activeClassName="current">
            Favorites
          </NavLink>
          <Link to="/" onClick={() => this.handleUserLogOut()}>
            Log Out
          </Link>
        </div>
      </div>
    ) : (
      <div className="navbar">
        <NavLink to="/" className="navbar-logo">
          dA
        </NavLink>
        <div className="navbar-list">
          <NavLink to="/browse" activeClassName="current">
            Collection
          </NavLink>
          <NavLink to="/login" activeClassName="current">
            Log In
          </NavLink>
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

const mapDispatchToProps = dispatch => {
  return {
    logUserOut: () => {
      dispatch(logUserOut());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
