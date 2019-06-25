import { createAsyncAction } from "redux-promise-middleware-actions";

import ActionTypes from "./types";

export const getAlbums = createAsyncAction(
  ActionTypes.ALBUMS.LIST,
  async () => {
    const res = await fetch("/albums");
    return await res.json();
  }
);
