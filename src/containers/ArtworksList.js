import React, { Component } from 'react';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";
import ArtworkCard from '../components/ArtworkCard';

class ArtworksList extends Component {

  artworksToRender() {
    return this.props.artworks.map(artwork => {
      return (<div key={artwork.ObjectID}>
        <ArtworkCard
          artwork={artwork}
          key={artwork.ObjectID}
        />
      </div>)
    })
  }

  render() {
    return(
      <div className="artworks-list-div">
        <StackGrid
          columnWidth={150}
          gutterWidth={15}
          gutterHeight={15}
        >
          {this.artworksToRender()}
        </StackGrid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
  }
}

export default connect(mapStateToProps)(ArtworksList);