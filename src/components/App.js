import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/main.scss";
import Home from "./Home";
import Detail from "./Detail";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:movieId" component={Detail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
