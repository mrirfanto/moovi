import React from "react";
import { connect } from "react-redux";

import MovieList from "./MovieList";
import { getPopularMovies } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  render() {
    return (
      <section>
        <h1 className="section-title">Popular Movies</h1>
        <MovieList
          movies={this.props.movieList}
          configApi={this.props.configApi}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ movieList, configApi, searchMovieResults }) => {
  return {
    movieList,
    configApi,
    searchMovieResults,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
})(Home);
