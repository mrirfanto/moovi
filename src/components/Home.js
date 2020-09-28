import React from "react";
import { connect } from "react-redux";

import MovieList from "../components/MovieList";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getConfigurationApi,
} from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getNowPlayingMovies();
    this.props.getConfigurationApi();
    this.props.getPopularMovies();
  }

  render() {
    return (
      <div className="container">
        <MovieList
          nowPlaying={this.props.nowPlaying}
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
    nowPlaying: state.nowPlaying,
    configApi: state.configApi,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
  getNowPlayingMovies,
  getConfigurationApi,
})(Home);
