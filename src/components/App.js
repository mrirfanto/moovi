import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../styles/main.scss";
import Home from "./Home";
import Detail from "./Detail";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Link to="/detail">See detail</Link>
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
