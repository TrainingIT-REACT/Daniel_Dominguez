import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "@babel/polyfill";

// Loading main style class
import "./App.css";

import configureStore from "./redux/store";

import Home from "./views/home/HomeContainer";
import Albums from "./views/albums/AlbumsContainer";
import Auth from "./views/auth/AuthContainer";
import Profile from "./views/profile/ProfileContainer";

import Header from "./containers/Header";
import Player from "./containers/Player";

const { store, persistor } = configureStore();

persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Header />
        <Player />
        <div className="App container">
          <Route path="/" exact component={Home} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/albums/:id" component={Albums} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/auth" exact component={Auth} />
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
