import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { playSong } from "../redux/actions/songs";
import { addSong } from "../redux/actions/history";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: props.song,
      historySongs: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.history) {
      return {
        historySongs: props.history.songs
      };
    }
    return null;
  }

  playSong() {
    const { song } = this.state;
    const { playSong, addSong } = this.props;
    playSong(song);
    addSong(song.id);
  }

  alreadyPlayed(id) {
    const { historySongs } = this.state;
    if (historySongs instanceof Set) return historySongs.has(id);
    return false;
  }

  render() {
    const { song } = this.state;
    if (!song) return null;
    return (
      <Button onClick={() => this.playSong()}>
        <div
          onClick={() => this.playSong()}
          style={{
            border: this.alreadyPlayed(song.id)
              ? "1px solid blue"
              : "1px solid black",
            margin: 20
          }}
        >
          <p>id: {song.id}</p>
          <p>name: {song.name}</p>
        </div>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song)),
  addSong: id => dispatch(addSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
