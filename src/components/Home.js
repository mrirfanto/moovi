import React from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

import MovieList from "./MovieList";
import { getPopularMovies } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  render() {
    const {
      movieList: { list, isFetching },
    } = this.props;
    return (
      <section>
        {!isFetching ? (
          <div>
            <h1 className="section-title">Popular Movies</h1>
            <MovieList movies={list} />
          </div>
        ) : (
          <ReactLoading
            className="loading"
            type={"bubbles"}
            color={"#f5f5f5"}
            width={"20%"}
            height={"60%"}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = ({ movieList }) => {
  return {
    movieList,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
})(Home);
