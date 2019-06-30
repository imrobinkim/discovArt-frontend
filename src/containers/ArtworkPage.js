import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingArtworkDetail } from '../redux/actionCreators';

class ArtworkPage extends Component {
  componentDidMount() {
    // debugger
    const artworkId = this.props.match.params.id
    this.props.fetchingArtworkDetail(artworkId)
  }

  render() {
    // debugger
    return (
      this.props.currentArtwork ? 
      <div>
        <img src={this.props.currentArtwork.Images[0].ImageURLs.Large} alt={`Image of ${this.props.currentArtwork.Title}`}/>
      </div> : null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentArtwork: state.currentArtwork
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingArtworkDetail: (artworkId) => { dispatch(fetchingArtworkDetail(artworkId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkPage);