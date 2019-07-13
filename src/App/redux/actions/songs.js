import { createAsyncAction } from "redux-promise-middleware-actions";

import ActionTypes from "./types";

export const getSongs = createAsyncAction(ActionTypes.SONGS.LIST, async () => {
  const res = await fetch("/songs");
  return await res.json();
});

export const playSong = song => ({
  type: ActionTypes.SONGS.MUSIC,
  payload: song
});
