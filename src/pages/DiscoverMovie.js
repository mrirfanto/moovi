import React from "react";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import MovieList from "../components/MovieList";

const DiscoverMovie = ({ match }) => {
  const moviesByGenre = useSelector((state) => state.moviesByGenre);
  const { loading, movies, error } = moviesByGenre;
  const { genre } = match.params;
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
          <h1 className="section-title">{`${genre} movies`}</h1>
          <MovieList movies={movies} />
        </>
      )}
    </section>
  );
};

export default DiscoverMovie;
