import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";

import ClearIcon from "@material-ui/icons/Clear";
import { Button } from "@material-ui/core";

import { playSong } from "../redux/actions/songs";
import { addSong } from "../redux/actions/history";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null,
      hide: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.songSelected) {
      return {
        song: props.songSelected
      };
    } else {
      if (state.song && !props.songSelected) {
        return {
          song: null
        };
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.song &&
      this.state.song &&
      this.state.song.id !== prevState.song.id
    ) {
      this.player.audioEl.load();
    }
    if (!this.state.song) {
      this.player.audioEl.load();
    }
  }

  clear() {
    const { playSong } = this.props;
    playSong(null);
  }

  render() {
    const { song, hide } = this.state;
    if (hide) return null;
    const path = song ? song.audio : null;
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: 30,
          left: 30,
          right: 30,
          backgroundColor: "#f1f3f4",
          zIndex: 2,
          alignItems: "center"
        }}
      >
        <ReactAudioPlayer
          ref={element => {
            this.player = element;
          }}
          src={path}
          autoPlay
          controls
        />
        <span style={{ flex: 1 }}>{song ? song.name : ""}</span>
        <Button style={{ marginRight: 10 }} onClick={() => this.clear()}>
          <ClearIcon />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songSelected: state.songs.songSelected
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
