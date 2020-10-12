import React, { Component } from "react";
import ReactLoading from "react-loading";

import MovieCard from "./MovieCard";

class MovieList extends Component {
  renderMovieCards() {
    if (!this.props.movies)
      return (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      );
    else {
      return this.props.movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movieTitle={movie.title}
            movieImg={movie.poster_path}
          />
        );
      });
    }
  }

  render() {
    return <section className="movie-list">{this.renderMovieCards()}</section>;
  }
}

export default MovieList;
