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
import PlayerView from "./views/player/PlayerContainer";

import Header from "./containers/Header";
import Player from "./containers/Player";
import PrivateRoute from "./containers/PrivateRoute";
import UserContext from "./contexts/user";

const { store, persistor } = configureStore();
persistor.purge();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser
    };
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <UserContext.Provider value={this.state}>
              <Header />
              <Player />
              <div className="App container">
                <Route path="/" exact component={Home} />
                <Route path="/albums" exact component={Albums} />
                <Route path="/albums/:id" component={Albums} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/song/:id" exact component={PlayerView} />
                <PrivateRoute path="/profile" component={Profile} />
              </div>
            </UserContext.Provider>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
