import { getSongs } from "../actions/songs";

import ActionTypes from "../actions/types";

// Estado inicial
const initialState = {
  isLoading: false,
  list: [],
  error: false,
  songSelected: null
};

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        error: false
      };
    case String(getSongs.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case ActionTypes.SONGS.MUSIC:
      return {
        ...state,
        songSelected: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
