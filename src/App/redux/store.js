import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// Reducers
import songs from "./reducers/songs";
import albums from "./reducers/albums";

export default createStore(
  combineReducers({ albums, songs }),
  applyMiddleware(thunk, promise())
);
