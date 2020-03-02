import React, { Component } from "react";
import { connect } from "react-redux";
import StackGrid from "react-stack-grid";
import ArtworkCard from "../components/ArtworkCard";

class ArtworksList extends Component {
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
      <div className="artworks-list-div">
        <StackGrid
          monitorImagesLoaded={true}
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={20}
        >
          {this.artworksToRender()}
        </StackGrid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artworks: state.artworks
  };
};

export default connect(mapStateToProps)(ArtworksList);
