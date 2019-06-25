import React, { Component } from "react";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: ["as"]
    };
  }

  componentDidMount() {
    const { getAlbums, getSongs } = this.props;
    getAlbums();
    getSongs();
  }

  render() {
    const { albums, songs } = this.props;
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <p>This is Home view</p>
          <p>{JSON.stringify(albums)}</p>
          <p>{JSON.stringify(songs)}</p>
        </div>
      </React.Suspense>
    );
  }
}
