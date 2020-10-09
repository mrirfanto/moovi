import React from "react";
import MovieList from "./MovieList";
import { connect } from "react-redux";

const SearchResults = (props) => {
  const { searchMovieResults, configApi } = props;
  console.log(searchMovieResults);
  return (
    <div>
      <h1 className="section-title">Search Results</h1>
      <MovieList movies={searchMovieResults} configApi={configApi} />
    </div>
  );
};

const mapStateToProps = ({ searchMovieResults, configApi }) => {
  return {
    searchMovieResults,
    configApi,
  };
};

export default connect(mapStateToProps)(SearchResults);
