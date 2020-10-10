import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  useEffect(() => {
    return history.listen((location) => {
      setQuery("");
    });
  }, [history]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(query);
  };

  return (
    <div className="search">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="search">
          <input
            placeholder="Search movies..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
