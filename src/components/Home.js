import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

import MovieList from "./MovieList";
import { getPopularMovies } from "../actions/movieActions";

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies);
  const { movies, loading, error } = popularMovies;
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

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
        <div>
          <h1 className="section-title">Popular Movies</h1>
          <MovieList movies={movies} />
        </div>
      )}
    </section>
  );
};

export default Home;
