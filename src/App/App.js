import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Loading main style class
import "./App.css";

import Store from "./redux/store";

import Home from "./views/home/HomeContainer";

const App = () => (
  <Provider store={Store}>
    <Router>
      <div className="App container">
        <h1>Reactify</h1>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  </Provider>
);

export default App;
