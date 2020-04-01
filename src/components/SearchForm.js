import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingArtworksBySearchTerm } from "../redux/actionCreators";

class SearchForm extends Component {
  state = {
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearchSumbit = e => {
    e.preventDefault();
    this.props.fetchingArtworksBySearchTerm(this.state.keyword);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSearchSumbit}>
        <div className="search-form-div">
          <input
            type="text"
            name="keyword"
            placeholder="Search by keyword"
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Search" /> */}
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingArtworksBySearchTerm: searchTerm => {
      dispatch(fetchingArtworksBySearchTerm(searchTerm));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
