import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchForm extends Component {
  state = {

  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>searchForm!
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(null, mapDispatchToProps)(SearchForm);