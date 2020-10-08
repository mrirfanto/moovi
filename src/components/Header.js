import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import SearchBar from "./SearchBar";
import { searchMovie } from "../actions";

const Header = (props) => {
  const history = useHistory();

  const onSearchSubmit = (query) => {
    props.searchMovie(query);
    history.push("/search");
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

export default connect(null, {
  searchMovie,
})(Header);
