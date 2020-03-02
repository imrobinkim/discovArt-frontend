import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingArtworkDetail } from "../redux/actionCreators";

class ArtworkPage extends Component {
  componentDidMount() {
    const artworkId = this.props.match.params.id;
    this.props.fetchingArtworkDetail(artworkId);
  }

  render() {
    return this.props.currentArtwork &&
      this.props.currentArtwork.id === parseInt(this.props.match.params.id) ? (
      <div className="artwork-page">
        <img
          src={this.props.currentArtwork.primaryimageurl}
          alt={`${this.props.currentArtwork.title}`}
        />
        <h3>{this.props.currentArtwork.title}</h3>
        <p>{this.props.currentArtwork.people[0].name}</p>
        <p>{this.props.currentArtwork.dated}</p>
        <p>{this.props.currentArtwork.classification}</p>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    currentArtwork: state.currentArtwork
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingArtworkDetail: artworkId => {
      dispatch(fetchingArtworkDetail(artworkId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkPage);
