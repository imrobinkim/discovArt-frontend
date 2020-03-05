import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchingArtworks, clearPage } from "../redux/actionCreators";
import SearchForm from "../components/SearchForm";
import ArtworksList from "./ArtworksList";

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchingArtworks();
  }

  componentWillUnmount() {
    this.props.clearPage();
  }

  render() {
    return (
      <Fragment>
        <SearchForm />
        <ArtworksList />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingArtworks: () => {
      dispatch(fetchingArtworks());
    },
    clearPage: () => {
      dispatch(clearPage());
    }
  };
};

export default connect(null, mapDispatchToProps)(CollectionPage);
