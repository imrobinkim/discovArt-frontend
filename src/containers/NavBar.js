import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logUserOut } from "../redux/actionCreators";

class NavBar extends Component {
  handleUserLogOut() {
    this.props.logUserOut();
  }

  toggleShowExpandedNavBar() {
    const exandedNavBar = document.getElementById("expanded-navbar");

    if (exandedNavBar.classList.contains("navbar__expanded--hidden")) {
      exandedNavBar.classList.remove("navbar__expanded--hidden");
    } else {
      exandedNavBar.classList.add("navbar__expanded--hidden");
    }
  }

  render() {
    return this.props.currentUser ? (
      <div>
        <div className="navbar">
          <NavLink to="/" className="navbar-logo">
            dA
          </NavLink>

          <div
            className="hide-on-larger"
            onClick={this.toggleShowExpandedNavBar}
          >
            <i className="fa fa-bars navbar__bars-icon" aria-hidden="true"></i>
          </div>

          <div className="navbar__list hide-on-smaller">
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

        <div
          id="expanded-navbar"
          className="navbar__list navbar__expanded navbar__expanded--hidden hide-on-larger"
        >
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
      <div>
        <div className="navbar">
          <NavLink to="/" className="navbar-logo">
            dA
          </NavLink>

          <div
            className="hide-on-larger"
            onClick={this.toggleShowExpandedNavBar}
          >
            <i className="fa fa-bars navbar__bars-icon" aria-hidden="true"></i>
          </div>

          <div className="navbar__list hide-on-smaller">
            <NavLink to="/browse" activeClassName="current">
              Collection
            </NavLink>
            <NavLink to="/login" activeClassName="current">
              Log In
            </NavLink>
          </div>
        </div>

        <div
          id="expanded-navbar"
          className="navbar__list navbar__expanded navbar__expanded--hidden hide-on-larger"
        >
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
