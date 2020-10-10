import React from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

import { getMovieByGenre } from "../actions";
import MovieList from "./MovieList";

class DiscoverMovie extends React.Component {
  render() {
    const { moviesByGenre, configApi } = this.props;
    const { genre } = this.props.match.params;
    return (
      <section>
        {moviesByGenre.length > 0 ? (
          <div>
            <h1 className="section-title">{`${genre} movies`}</h1>
            <MovieList movies={moviesByGenre} configApi={configApi} />
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

const mapStateToProps = ({ moviesByGenre, movieGenres, configApi }) => {
  return {
    moviesByGenre,
    movieGenres,
    configApi,
  };
};

export default connect(mapStateToProps, {
  getMovieByGenre,
})(DiscoverMovie);
