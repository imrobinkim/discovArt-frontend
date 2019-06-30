import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchingInitialArtworks } from '../../redux/actionCreators';
import SearchForm from '../../components/SearchForm';
import ArtworksList from '../ArtworksList';

class CollectionPage extends Component {
  componentDidMount() {
    this.props.fetchingInitialArtworks();
  }

  render() {
    return (
      <Fragment>
        <SearchForm />
        <ArtworksList />
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingInitialArtworks: () => { dispatch(fetchingInitialArtworks()) }
  }
}

export default connect(null, mapDispatchToProps)(CollectionPage);