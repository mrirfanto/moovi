import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";

class MovieList extends Component {
  getImageSource(poster_path, configApi) {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}w500/${poster_path}`;
  }

  renderMovieCards() {
    if (!this.props.movies) return "";
    return this.props.movies.map((movie) => {
      return (
        <div
          onClick={() => this.props.selectMovie(movie)}
          className="card"
          key={movie.id}
        >
          <img
            src={this.getImageSource(movie.poster_path, this.props.configApi)}
            alt={movie.original_title.toLowerCase().replace("", "-")}
          />
          <h1>{movie.title}</h1>
        </div>
      );
    });
  }

  render() {
    return <section className="movie-list">{this.renderMovieCards()}</section>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps, {
  selectMovie,
})(MovieList);
