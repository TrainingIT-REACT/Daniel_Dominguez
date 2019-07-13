import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { playSong } from "../redux/actions/songs";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: props.song
    };
  }

  playSong() {
    const { song } = this.state;
    const { playSong } = this.props;
    playSong(song);
  }

  render() {
    const { song } = this.state;
    if (!song) return null;
    return (
      <Button onClick={() => this.playSong()}>
        <div
          onClick={() => this.playSong()}
          style={{
            border: "1px solid black",
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
