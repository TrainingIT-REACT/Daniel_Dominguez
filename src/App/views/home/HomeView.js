import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

import music from "../../assets/music.mp3";

export default class HomeView extends Component {
  componentDidMount() {
    const { getSongs } = this.props;
    getSongs();
  }

  getRandomSongs() {
    const { songs } = this.props;
    if (!songs) return;

    const shuffled = songs.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    console.log(shuffled);
    return shuffled.slice(0, 10);
  }

  render() {
    const recommendedSongs = this.getRandomSongs();

    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <h1>Estas son nuestras sugerencias</h1>
          <p>{JSON.stringify(recommendedSongs)}</p>
        </div>
      </React.Suspense>
    );
  }
}
