import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getConfigurationApi, getMovieGenres } from "../actions";

import "../styles/main.scss";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Sidebar from "./Sidebar";
import DiscoverMovie from "./DiscoverMovie";

class App extends React.Component {
  componentDidMount() {
    this.props.getConfigurationApi();
    this.props.getMovieGenres();
  }

  render() {
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
  }
}

export default connect(null, {
  getConfigurationApi,
  getMovieGenres,
})(App);
