import React from "react";

import { NavLink } from "react-router-dom";

const AlbumCover = ({ id, name, artist, cover, alreadySeen }) => {
  return (
    <NavLink strict to={`/albums/${id}`} activeStyle={styles.active}>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: alreadySeen ? "red" : "#ccc",
          margin: 20
        }}
      >
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>artist: {artist}</p>
        <p>cover: {cover}</p>
      </div>
    </NavLink>
  );
};

const styles = {
  active: {
    fontStyle: "bold"
  }
};

export default AlbumCover;
