import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectMovie } from "../actions";

class MovieCard extends React.Component {
  state = {
    showDetailOverlay: false,
  };

  getImageSource(poster_path) {
    const { images: { secure_base_url } = {} } = this.props.configApi;
    return `${secure_base_url}w500${poster_path}`;
  }

  renderOverlayPoster() {
    if (this.state.showDetailOverlay) {
      return (
        <div className="card__poster__overlay">
          <Link to={`/detail/${this.props.movieId}`} replace>
            <button className="btn">DETAILS</button>
          </Link>
        </div>
      );
    } else {
      return "";
    }
  }

  renderPosterNotFound() {
    return (
      <div className="not-found__image">
        <i className="far fa-image"></i>
        <p>Oops..Image Not Found</p>
      </div>
    );
  }

  onSelectMovie = () => {
    const { movieId } = this.props;
    this.props.selectMovie(movieId);
  };

  render() {
    const { movieImg, movieTitle } = this.props;
    return (
      <div
        onClick={this.onSelectMovie}
        className="card"
        onMouseEnter={() => this.setState({ showDetailOverlay: true })}
        onMouseLeave={() => this.setState({ showDetailOverlay: false })}
      >
        <div className="card__poster">
          {movieImg == null ? (
            this.renderPosterNotFound()
          ) : (
            <img
              src={this.getImageSource(movieImg)}
              alt={movieTitle.toLowerCase().replace("", "-")}
            />
          )}
          {this.renderOverlayPoster()}
        </div>
        <h1>{movieTitle}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedMovie, configApi }) => {
  return {
    selectedMovie,
    configApi,
  };
};

export default connect(mapStateToProps, {
  selectMovie,
})(MovieCard);
