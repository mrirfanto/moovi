import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { getPopularMovies } from "../actions/movieActions";

const Home = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const popularMovies = useSelector((state) => state.popularMovies);
  const { movies, totalPages, loading, error } = popularMovies;
  const [page, setPage] = useState(1);

  const onChangePagination = (page) => {
    setPage(page);
  };

  useEffect(() => {
    history.push({
      pathname: location.pathname,
      search: `?page=${page}`,
    });
    dispatch(getPopularMovies(page));
  }, [dispatch, page, history, location.pathname]);

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
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onChangePagination={onChangePagination}
          />
        </div>
      )}
    </section>
  );
};

export default Home;
