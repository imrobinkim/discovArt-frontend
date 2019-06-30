import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtworkCard from '../../components/ArtworkCard';

class ArtworksList extends Component {

  artworksToRender() {
    return this.props.artworks.map(artwork => <ArtworkCard 
      artwork={artwork} 
      key={artwork.ObjectID} 
    />)
  }

  render() {
    console.log(this.props.artworks)
    return(
      <div>
        {this.artworksToRender()}
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