import React, { Component } from "react";
import { HashRouter as Router } from 'react-router-dom';

import Routes from "./Routes";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {Routes}
        </div>
      </Router>
    );
  }
}

export default App;
