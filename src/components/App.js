import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/main.scss";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Sidebar from "./Sidebar";

class App extends React.Component {
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
            <Route path="/search" component={SearchResults} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
