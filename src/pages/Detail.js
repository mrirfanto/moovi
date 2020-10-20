import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

import {
  getMovieDetails,
  getSimilarMovies,
  getMovieCredits,
} from "../actions/movieActions";

import MovieList from "../components/MovieList";

const Detail = ({ match, configApi }) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading: loadingDetail, detail, error: errorDetail } = movieDetails;
  const similarMovies = useSelector((state) => state.similarMovies);
  const {
    loading: loadingSimilar,
    movies,
    error: errorSimilar,
  } = similarMovies;
  const movieCredits = useSelector((state) => state.movieCredits);
  const { credits } = movieCredits;

  const getImageSource = (poster_path, configApi, size) => {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}${size}/${poster_path}`;
  };

  const renderCast = () => {
    return credits.cast.map((c) => {
      return c.profile_path == null ? (
        <div className="not-found__profile" key={c.cast_id}>
          <i className="fas fa-user-circle"></i>
        </div>
      ) : (
        <img
          key={c.cast_id}
          src={getImageSource(c.profile_path, configApi, "w185")}
          alt={c.name.toLowerCase().replace("", "-")}
        />
      );
    });
  };

  const renderPosterNotFound = () => {
    return (
      <div className="not-found__poster">
        <i className="far fa-image"></i>
        <p>Oops..Image Not Found</p>
      </div>
    );
  };

  const moveCastSlider = (type) => {
    const element = document.getElementsByClassName("cast__list");
    if (type === "right") {
      element[0].scrollLeft += 70;
    } else {
      element[0].scrollLeft -= 70;
    }
  };

  useEffect(() => {
    const {
      params: { movieId },
    } = match;
    dispatch(getMovieDetails(movieId));
    dispatch(getSimilarMovies(movieId));
    dispatch(getMovieCredits(movieId));
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
                src={getImageSource(detail.poster_path, configApi, "w500")}
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
            <h2>CAST</h2>
            <div className="cast">
              <i
                className="fas fa-chevron-left"
                onClick={() => moveCastSlider("left")}
              ></i>
              <div className="cast__list">{renderCast()}</div>
              <i
                className="fas fa-chevron-right"
                onClick={() => moveCastSlider("right")}
              ></i>
            </div>
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
      ) : movies.length > 0 ? (
        <>
          <h1 className="section-title">Similar Movies</h1>
          <MovieList movies={movies.splice(0, 10)} configApi={configApi} />
        </>
      ) : (
        ""
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
