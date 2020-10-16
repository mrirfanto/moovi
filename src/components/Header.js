import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import SearchBar from "./SearchBar";
import { searchMovie } from "../actions/movieActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSearchSubmit = (query) => {
    dispatch(searchMovie(query));
    history.push(`/search/${query}`);
  };

  return (
    <header className="container header">
      <Link to="/" className="brand">
        MOOVI
      </Link>
      <SearchBar onSubmit={onSearchSubmit} />
    </header>
  );
};

export default Header;
