import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getConfigurationApi } from "../actions";
import { getMovieGenres } from "../actions/movieActions";

import "../styles/main.scss";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import SearchResults from "../pages/SearchResults";
import DiscoverMovie from "../pages/DiscoverMovie";

import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieGenres());
    dispatch(getConfigurationApi());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <aside>
          <Sidebar />
        </aside>
        <main className="container main">
          <Route path="/" exact component={Home} />
          <Route path="/detail/:movieId" component={Detail} />
          <Route path="/search/:query" component={SearchResults} />
          <Route path="/discover/:genre" component={DiscoverMovie} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
