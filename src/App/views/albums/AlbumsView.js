import React, { Component } from "react";

export default class AlbumsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    const { getAlbums, getSongs } = this.props;
    getAlbums();
  }

  render() {
    const { albums } = this.props;
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <p>This is Home view</p>
          <p>{JSON.stringify(albums)}</p>
        </div>
      </React.Suspense>
    );
  }
}
