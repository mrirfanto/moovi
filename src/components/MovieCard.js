import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectMovie } from "../actions/movieActions";

const MovieCard = ({ movieId, movieImg, movieTitle, configApi }) => {
  const [showDetailOverlay, setShowDetailOverlay] = useState(false);
  const dispatch = useDispatch();

  const getImageSource = (poster_path) => {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}w500${poster_path}`;
  };

  const renderOverlayPoster = () => {
    if (showDetailOverlay) {
      return (
        <div className="card__poster__overlay">
          <Link to={`/detail/${movieId}`} replace>
            <button className="btn">DETAILS</button>
          </Link>
        </div>
      );
    } else {
      return "";
    }
  };

  const renderPosterNotFound = () => {
    return (
      <div className="not-found__poster">
        <i className="far fa-image"></i>
        <p>Oops..Image Not Found</p>
      </div>
    );
  };

  const onSelectMovie = () => {
    dispatch(selectMovie(movieId));
  };

  return (
    <div
      onClick={onSelectMovie}
      className="card"
      onMouseEnter={() => setShowDetailOverlay(true)}
      onMouseLeave={() => setShowDetailOverlay(false)}
    >
      <div className="card__poster">
        {movieImg == null ? (
          renderPosterNotFound()
        ) : (
          <img
            src={getImageSource(movieImg)}
            alt={movieTitle.toLowerCase().replace("", "-")}
          />
        )}
        {renderOverlayPoster()}
      </div>
      <h1>{movieTitle}</h1>
    </div>
  );
};

const mapStateToProps = ({ configApi }) => {
  return {
    configApi,
  };
};

export default connect(mapStateToProps, {
  selectMovie,
})(MovieCard);
