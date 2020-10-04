import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  getImageSource(poster_path, configApi) {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}w500/${poster_path}`;
  }

  renderMovieCards() {
    if (!this.props.movies) return "";
    return this.props.movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          movieTitle={movie.title}
          movieImg={this.getImageSource(
            movie.poster_path,
            this.props.configApi
          )}
        />
      );
    });
  }

  render() {
    return <section className="movie-list">{this.renderMovieCards()}</section>;
  }
}

export default MovieList;
