import React from "react";
import { connect } from "react-redux";

import MovieList from "./MovieList";
import {
  getPopularMovies,
  getConfigurationApi,
  getMovieGenres,
} from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getMovieGenres();
    this.props.getConfigurationApi();
    this.props.getPopularMovies();
  }

  render() {
    return (
      <div>
        <h1 className="section-title">Popular Movies</h1>
        <MovieList
          movies={this.props.movieList}
          configApi={this.props.configApi}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  movieList,
  configApi,
  searchMovieResults,
  movieGenres,
}) => {
  return {
    movieList,
    configApi,
    searchMovieResults,
    movieGenres,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
  getConfigurationApi,
  getMovieGenres,
})(Home);
