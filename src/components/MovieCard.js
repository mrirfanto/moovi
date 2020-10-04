import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectMovie } from "../actions";

class MovieCard extends React.Component {
  state = {
    showDetailOverlay: false,
  };

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
          <img src={movieImg} alt={movieTitle.toLowerCase().replace("", "-")} />
          {this.renderOverlayPoster()}
        </div>
        <h1>{movieTitle}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedMovie }) => {
  return {
    selectedMovie,
  };
};

export default connect(mapStateToProps, {
  selectMovie,
})(MovieCard);
