import React, { Component } from "react";
import "materialize-css";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Timer from "./Components/Timer";
import Info from "./Components/Info";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/info" component={Info} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
