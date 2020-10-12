import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { getMovieByGenre } from "../actions";

const Sidebar = (props) => {
  const history = useHistory();
  const [showSidebar, setShowSideBar] = useState(false);

  const onSelectGenre = (genreId, genreName) => {
    props.getMovieByGenre(genreId);
    history.push(`/discover/${genreName}`);
  };

  const renderGenreList = (genres) => {
    if (genres.length > 0) {
      return genres.map((genre) => {
        return (
          <li
            key={genre.id}
            onClick={() => onSelectGenre(genre.id, genre.name)}
          >
            {genre.name}
          </li>
        );
      });
    }
    return "";
  };
  const { movieGenres } = props;

  return (
    <div
      className="sidebar"
      style={{
        transform: showSidebar ? "translateX(0)" : "translate(-300px)",
        transition: "all .4s ease-in-out",
      }}
    >
      <button
        className="btn-sidebar"
        onClick={() => {
          setShowSideBar(!showSidebar);
        }}
      >
        <i className="fas fa-bars"></i>
      </button>
      <h1 className="section-title">Categories</h1>
      <ul>{renderGenreList(movieGenres)}</ul>
    </div>
  );
};

const mapStateToProps = ({ movieGenres }) => {
  return {
    movieGenres,
  };
};

export default connect(mapStateToProps, {
  getMovieByGenre,
})(Sidebar);
