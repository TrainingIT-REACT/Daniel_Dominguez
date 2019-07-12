import ActionTypes from "../actions/types";

const initialState = {
  songs: new Set(),
  albums: new Set()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HISTORY.ADD_ALBUM:
      return {
        ...state,
        albums: state.albums.add(action.payload)
      };

    case ActionTypes.HISTORY.ADD_SONG:
      return {
        ...state,
        songs: state.songs.add(action.payload)
      };

    case ActionTypes.HISTORY.CLEAN:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
