import React, { Component } from "react";
import { connect } from "react-redux";

class FavoritesPage extends Component {
  render() {
    return (
      <div className="favorites-page">
        <div>You don't have any favorites yet!</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(FavoritesPage);
