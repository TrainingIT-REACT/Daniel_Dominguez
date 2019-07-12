import types from "./types";

export const addSong = id => ({
  type: types.HISTORY.ADD_SONG,
  payload: id
});

export const addAlbum = id => ({
  type: types.HISTORY.ADD_ALBUM,
  payload: id
});

export const cleanHistory = () => ({
  type: types.HISTORY.CLEAN
});
