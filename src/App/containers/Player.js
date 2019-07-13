import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null
    };
  }

  static getDerivedStateFromProps(props) {
    if (props.songSelected) {
      console.log(props);
      return {
        song: props.songSelected
      };
    }
    return null;
  }

  render() {
    const { song } = this.state;

    const path = song ? song.audio : null;
    console.log(path);
    return (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "red"
        }}
      >
        <ReactAudioPlayer src={path} autoPlay controls />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songSelected: state.songs.songSelected
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
