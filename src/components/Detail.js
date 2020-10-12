import React from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

import { getMovieDetail, getSimilarMovies } from "../actions";
import MovieList from "./MovieList";

class Detail extends React.Component {
  getDetail() {
    const {
      params: { movieId },
    } = this.props.match;
    this.props.getMovieDetail(movieId);
  }

  getSimilar() {
    const {
      params: { movieId },
    } = this.props.match;
    this.props.getSimilarMovies(movieId);
  }

  getImageSource(poster_path, configApi) {
    const { images: { secure_base_url } = {} } = configApi;
    return `${secure_base_url}w500/${poster_path}`;
  }

  renderPosterNotFound() {
    return (
      <div className="not-found__image">
        <i className="far fa-image"></i>
        <p>Oops..Image Not Found</p>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.getSimilar();
      this.getDetail();
    }
  }

  componentDidMount() {
    this.getSimilar();
    this.getDetail();
  }
  render() {
    const {
      movieDetail: { detail, isFetching },
      configApi,
      similarMovies,
    } = this.props;
    if (!isFetching) {
      return (
        <div>
          <div className="detail">
            <div className="detail__poster">
              {detail.poster_path == null ? (
                this.renderPosterNotFound()
              ) : (
                <img
                  src={this.getImageSource(detail.poster_path, configApi)}
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
          {similarMovies.length > 0 ? (
            <>
              <h1 className="section-title">Similar Movies</h1>
              <MovieList movies={similarMovies} configApi={configApi} />
            </>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      );
    }
  }
}

const mapStateToProps = ({ movieDetail, configApi, similarMovies }) => {
  return {
    movieDetail,
    configApi,
    similarMovies: similarMovies.splice(0, 5),
  };
};

export default connect(mapStateToProps, {
  getMovieDetail,
  getSimilarMovies,
})(Detail);
