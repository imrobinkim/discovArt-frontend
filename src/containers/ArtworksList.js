import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingMoreArtworks } from "../redux/actionCreators";
import StackGrid from "react-stack-grid";
import ArtworkCard from "../components/ArtworkCard";

class ArtworksList extends Component {
  handleLoadMore = () => {
    this.props.fetchingMoreArtworks(
      this.props.currentArtworksPage,
      this.props.searchTerm
    );
  };

  artworksToRender() {
    return this.props.artworks.map(artwork => {
      return (
        <div key={artwork.id}>
          <ArtworkCard artwork={artwork} key={artwork.id} />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="artworks-list">
        <StackGrid
          monitorImagesLoaded={true}
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={20}
        >
          {this.artworksToRender()}
        </StackGrid>
        <div className="load-more-artworks">
          <button onClick={this.handleLoadMore}>Load More</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artworks: state.artworks,
    searchTerm: state.searchTerm,
    currentArtworksPage: state.currentArtworksPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingMoreArtworks: (currentPage, searchTerm) => {
      dispatch(fetchingMoreArtworks(currentPage, searchTerm));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList);
