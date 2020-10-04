import React from "react";
import { connect } from "react-redux";

import {
  getMovieDetail,
  getConfigurationApi,
  getSimilarMovies,
} from "../actions";
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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.getSimilar();
      this.getDetail();
    }
  }

  componentDidMount() {
    this.props.getConfigurationApi();
    this.getSimilar();
    this.getDetail();
  }
  render() {
    const { movieDetail, configApi, similarMovies } = this.props;
    console.log(movieDetail);
    if (Object.keys(movieDetail).length > 0) {
      return (
        <div className="container">
          <div className="detail">
            <img
              className="detail__poster"
              src={this.getImageSource(movieDetail.poster_path, configApi)}
              alt={movieDetail.title.toLowerCase().replace("", "-")}
            />
            <div className="detail__description">
              <h1 className="title">{movieDetail.title}</h1>
              <div className="info">
                <div>{movieDetail.vote_average}</div>
                <div>
                  {movieDetail.runtime} MIN /{" "}
                  {movieDetail.release_date.split("-")[0]}
                </div>
              </div>
              <h2>SYNOPSIS</h2>
              <p className="overview">{movieDetail.overview}</p>
            </div>
          </div>
          <h1 className="section-title">Similar Movies</h1>
          <MovieList movies={similarMovies} configApi={configApi} />
        </div>
      );
    }
    return "";
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
  getConfigurationApi,
  getSimilarMovies,
})(Detail);
