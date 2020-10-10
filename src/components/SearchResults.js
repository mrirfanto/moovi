import React from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

import { searchMovie } from "../actions";
import MovieList from "./MovieList";

class SearchResults extends React.Component {
  componentDidMount() {
    const { query } = this.props.match.params;
    this.props.searchMovie(query);
  }

  render() {
    const { searchMovieResults, configApi } = this.props;
    return (
      <section>
        {searchMovieResults.length > 0 ? (
          <div>
            <h1 className="section-title">Search Results</h1>
            <MovieList movies={searchMovieResults} configApi={configApi} />
          </div>
        ) : (
          <ReactLoading
            className="loading"
            type={"bubbles"}
            color={"#f5f5f5"}
            width={"20%"}
            height={"60%"}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = ({ searchMovieResults, configApi }) => {
  return {
    searchMovieResults,
    configApi,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
})(SearchResults);
