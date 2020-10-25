import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

import {
  getMovieDetails,
  getSimilarMovies,
  getMovieCredits,
} from "../actions/movieActions";

import { getMovieTrailer, RESET_STATE } from "../actions/youtubeActions";

import MovieList from "../components/MovieList";
import Rating from "../components/Rating";
import Modal from "../components/Modal";

const Detail = ({ match, configApi }) => {
  const dispatch = useDispatch();
  const { loading: loadingDetail, detail, error: errorDetail } = useSelector(
    (state) => state.movieDetails
  );
  const { loading: loadingSimilar, movies, error: errorSimilar } = useSelector(
    (state) => state.similarMovies
  );
  const { credits } = useSelector((state) => state.movieCredits);
  const { items } = useSelector((state) => state.movieTrailer);
  const {
    id: { videoId },
  } = items[0];
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  const [showModal, setShowModal] = useState(false);
  const [slider, setSlider] = useState(0);
  const [sliderMax, setSliderMax] = useState(false);

  const getImageSource = (poster_path, configApi, size) => {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}${size}/${poster_path}`;
  };

  const moveCastSlider = (type) => {
    const element = document.getElementsByClassName("cast__list");
    if (type === "right") {
      element[0].scrollLeft += 70;
    } else {
      element[0].scrollLeft -= 70;
    }
    setSliderMax(
      element[0].scrollLeft + element[0].clientWidth === element[0].scrollWidth
    );
    setSlider(element[0].scrollLeft);
  };

  const onViewTrailer = () => {
    dispatch(getMovieTrailer(`${detail.title} trailer`));
    setShowModal(true);
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

  useEffect(() => {
    const {
      params: { movieId },
    } = match;
    dispatch(getMovieDetails(movieId));
    dispatch(getSimilarMovies(movieId));
    dispatch(getMovieCredits(movieId));
    dispatch(RESET_STATE());
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
              <Rating
                rating={detail.vote_average || 0}
                voteCount={detail.vote_count}
              />
              <div>
                {detail.runtime} MIN / {detail.release_date.split("-")[0]}
              </div>
            </div>
            <h2>SYNOPSIS</h2>
            <p className="overview">{detail.overview}</p>
            <h2>CAST</h2>
            <div className="cast">
              {slider > 0 ? (
                <i
                  className="fas fa-chevron-left"
                  onClick={() => moveCastSlider("left")}
                ></i>
              ) : (
                ""
              )}
              <div className="cast__list">{renderCast()}</div>
              {credits.cast.length > 7 && !sliderMax ? (
                <i
                  className="fas fa-chevron-right"
                  onClick={() => moveCastSlider("right")}
                ></i>
              ) : (
                ""
              )}
            </div>
            <button className="btn btn__basic" onClick={onViewTrailer}>
              <i class="far fa-play-circle"></i> Trailer
            </button>
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
          <MovieList movies={movies} configApi={configApi} />
        </>
      ) : (
        ""
      )}
      {videoId && showModal ? (
        <Modal
          content={
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src={videoSrc}
              title={detail.title}
            />
          }
          show={showModal}
          close={() => setShowModal(false)}
        />
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
