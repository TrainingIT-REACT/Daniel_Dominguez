import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// Reducers
import songs from "./reducers/songs";
import albums from "./reducers/albums";
import history from "./reducers/history";
import user from "./reducers/user";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["history", "user"]
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ albums, songs, history, user })
);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, promise())
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
