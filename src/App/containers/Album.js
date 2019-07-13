import React, { Component } from "react";

import { connect } from "react-redux";

import { getSongs } from "../redux/actions/songs";
import { addAlbum } from "../redux/actions/history";

import Song from "./Song";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: props.details,
      songs: []
    };
  }

  componentDidMount() {
    const { getSongs, addAlbum } = this.props;
    const { details } = this.state;
    addAlbum(details.id);
    getSongs();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.songs) {
      const songsOfAlbum = props.songs.filter(
        song => song.album_id === state.details.id
      );
      return { songs: songsOfAlbum };
    }
    return null;
  }

  render() {
    const { details, songs } = this.state;
    if (!details || !songs) return null;
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <h1>Our albums</h1>
          <p>{details.id}</p>
          <p>{details.name}</p>
          <p>{details.cover}</p>
        </div>
        <div>
          {songs.map(song => (
            <Song song={song} />
          ))}
        </div>
      </React.Suspense>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.songs.list,
  history: state.history
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs()),
  addAlbum: id => dispatch(addAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
