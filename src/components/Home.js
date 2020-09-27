import React from "react";
import { connect } from "react-redux";

import moviedb from "../api/moviedb";
import MovieList from "../components/MovieList";
import { getPopularMovies } from "../actions";

class Home extends React.Component {
  state = {
    popularMovies: [],
    configurationApi: {},
  };

  async getPopularMovies() {
    const res = await moviedb.get("/movie/popular");
    this.setState({ popularMovies: res.data.results });
  }

  async getConfigurationApi() {
    const res = await moviedb.get("configuration");
    this.setState({ configurationApi: res.data });
  }

  componentDidMount() {
    this.props.getPopularMovies();
    this.getConfigurationApi();
    this.getPopularMovies();
  }

  render() {
    return (
      <div className="container">
        <MovieList
          movies={this.state.popularMovies}
          configApi={this.state.configurationApi}
        />
      </div>
    );
  }
}

export default connect(null, {
  getPopularMovies,
})(Home);
