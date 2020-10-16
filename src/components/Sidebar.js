import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import { getMovieByGenre } from "../actions/movieActions";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showSidebar, setShowSideBar] = useState(false);
  const movieGenres = useSelector((state) => state.movieGenres);
  const { loading, genres, error } = movieGenres;

  const onSelectGenre = (genreId, genreName) => {
    dispatch(getMovieByGenre(genreId));
    history.push(`/discover/${genreName}`);
  };

  const renderGenreList = () => {
    return genres.map((genre) => {
      return (
        <li key={genre.id} onClick={() => onSelectGenre(genre.id, genre.name)}>
          {genre.name}
        </li>
      );
    });
  };

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
      {loading ? (
        <ReactLoading
          className="loading"
          type={"bubbles"}
          color={"#f5f5f5"}
          width={"20%"}
          height={"60%"}
        />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <ul>{renderGenreList()}</ul>
      )}
    </div>
  );
};

export default Sidebar;
