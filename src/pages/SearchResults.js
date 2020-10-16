import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import ReactLoading from "react-loading";

import { searchMovie } from "../actions/movieActions";
import MovieList from "../components/MovieList";

const SearchResults = ({ match, configApi }) => {
  const dispatch = useDispatch();

  const searchMovieResults = useSelector((state) => state.searchMovieResults);
  const { movies, loading, error } = searchMovieResults;

  useEffect(() => {
    const { query } = match.params;
    dispatch(searchMovie(query));
  }, [dispatch, match.params]);

  return (
    <section>
      {loading ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1 className="section-title">Search Results</h1>
          <MovieList movies={movies} configApi={configApi} />
        </>
      )}
    </section>
  );
};

const mapStateToProps = ({ configApi }) => {
  return {
    configApi,
  };
};

export default connect(mapStateToProps, {})(SearchResults);
