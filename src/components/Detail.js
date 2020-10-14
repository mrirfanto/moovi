import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

import { getMovieDetails, getSimilarMovies } from "../actions/movieActions";
import MovieList from "./MovieList";

const Detail = ({ match, configApi }) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading: loadingDetail, detail, error: errorDetail } = movieDetails;
  console.log(detail);
  const similarMovies = useSelector((state) => state.similarMovies);
  const {
    loading: loadingSimilar,
    movies,
    error: errorSimilar,
  } = similarMovies;

  const getImageSource = (poster_path, configApi) => {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}w500/${poster_path}`;
  };

  const renderPosterNotFound = () => {
    return (
      <div className="not-found__image">
        <i className="far fa-image"></i>
        <p>Oops..Image Not Found</p>
      </div>
    );
  };

  useEffect(() => {
    const {
      params: { movieId },
    } = match;
    dispatch(getMovieDetails(movieId));
    dispatch(getSimilarMovies(movieId));
  }, [dispatch, match]);

  return (
    <>
      {loadingDetail ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      ) : errorDetail ? (
        <h1>{errorDetail}</h1>
      ) : (
        <div className="detail">
          <div className="detail__poster">
            {detail.poster_path == null ? (
              renderPosterNotFound()
            ) : (
              <img
                src={getImageSource(detail.poster_path, configApi)}
                alt={detail.title.toLowerCase().replace("", "-")}
              />
            )}
          </div>
          <div className="detail__description">
            <h1 className="title">{detail.title}</h1>
            <div className="info">
              <div>Rating: {detail.vote_average}</div>
              <div>
                {detail.runtime} MIN / {detail.release_date.split("-")[0]}
              </div>
            </div>
            <h2>SYNOPSIS</h2>
            <p className="overview">{detail.overview}</p>
          </div>
        </div>
      )}
      {loadingSimilar ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      ) : errorSimilar ? (
        <h1>{errorSimilar}</h1>
      ) : (
        <>
          <h1 className="section-title">Similar Movies</h1>
          <MovieList movies={movies.splice(0, 10)} configApi={configApi} />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ configApi }) => {
  return {
    configApi,
  };
};

export default connect(mapStateToProps, {})(Detail);
