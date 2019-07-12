import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "@babel/polyfill";

// Loading main style class
import "./App.css";

import Store from "./redux/store";

import Home from "./views/home/HomeContainer";
import AlbumDetailed from "./views/albums/AlbumDetailedContainer";
import Albums from "./views/albums/AlbumsContainer";
import Auth from "./views/auth/AuthContainer";
import Profile from "./views/profile/ProfileContainer";

import Header from "./containers/Header";

const App = () => (
  <Provider store={Store}>
    <Router>
      <Header />
      <div className="App container">
        <h1>Reactify</h1>
        <Route path="/" exact component={Home} />
        <Route path="/albums" exact component={Albums} />
        <Route path="/albums/:id" component={AlbumDetailed} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/auth" exact component={Auth} />
      </div>
    </Router>
  </Provider>
);

export default App;
