import React from "react";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import MovieList from "../components/MovieList";

const DiscoverMovie = ({ match }) => {
  const { type } = match.params;
  const moviesByGenre = useSelector((state) => state.moviesByGenre);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const topRated = useSelector((state) => state.topRated);

  const selectDataFromReducer = (key) => {
    switch (type) {
      case "Now Playing":
        return nowPlaying[key];
      case "Top Rated":
        return topRated[key];
      default:
        return moviesByGenre[key];
    }
  };

  const loading = selectDataFromReducer("loading");
  const movies = selectDataFromReducer("movies");
  const error = selectDataFromReducer("error");

  return (
    <section>
      {loading ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1 className="section-title">{`${type} movies`}</h1>
          <MovieList movies={movies} />
        </>
      )}
    </section>
  );
};

export default DiscoverMovie;
