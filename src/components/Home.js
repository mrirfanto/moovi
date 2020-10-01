import React from "react";
import { connect } from "react-redux";

import MovieList from "../components/MovieList";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getConfigurationApi,
  searchMovie,
} from "../actions";
import MovieSlider from "./MovieSlider";

class Home extends React.Component {
  state = { query: "" };

  componentDidMount() {
    this.props.getNowPlayingMovies();
    this.props.getConfigurationApi();
    this.props.getPopularMovies();
  }

  onSearchSubmit = (event) => {
    event.preventDefault();

    this.props.searchMovie(this.state.query);
  };

  render() {
    return (
      <div className="container">
        <div className="search">
          <form onSubmit={this.onSearchSubmit}>
            <label htmlFor="search">
              <input
                placeholder="Search..."
                type="text"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </label>
          </form>
          <div className="title">{this.props.searchMovieResults.length}</div>
        </div>
        <h1 className="title">Now Playing</h1>
        <MovieSlider
          movies={this.props.nowPlaying}
          configApi={this.props.configApi}
        />
        <h1 className="title">Popular Movies</h1>
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
    searchMovieResults: state.searchMovieResults,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
  getPopularMovies,
  getNowPlayingMovies,
  getConfigurationApi,
})(Home);
