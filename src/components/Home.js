import React from "react";
import { connect } from "react-redux";

import MovieList from "./MovieList";
import { getPopularMovies, getConfigurationApi } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getConfigurationApi();
    this.props.getPopularMovies();
  }

  render() {
    return (
      <div className="container">
        <h1 className="section-title">Popular Movies</h1>
        <MovieList
          movies={this.props.movieList}
          configApi={this.props.configApi}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    configApi: state.configApi,
    searchMovieResults: state.searchMovieResults,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
  getConfigurationApi,
})(Home);
