import React, { Component } from "react";

import AlbumCover from "../../containers/AlbumCover";
import Album from "../../containers/Album";

export default class AlbumsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(props.match.params.id),
      albums: []
    };
  }

  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  static getDerivedStateFromProps(props) {
    if (props.albums) {
      return { albums: props.albums };
    }
    console.log(props.albumsHistory);
    return null;
  }

  alreadySeen(id) {
    const { albumsHistory } = this.props;
    return albumsHistory.has(id);
  }

  renderDetailedAlbum() {
    const { albums, id } = this.state;
    const album = albums.filter(a => id === a.id)[0];
    if (!album) return null;
    return <Album details={album} />;
  }

  render() {
    const { albums, id } = this.state;
    if (id) return this.renderDetailedAlbum();
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <h1>Our albums</h1>
          <div style={{ flex: 1 }}>
            {albums.map(album => {
              return (
                <AlbumCover
                  key={album.id}
                  name={album.name}
                  artist={album.artist}
                  cover={album.cover}
                  id={album.id}
                  alreadySeen={this.alreadySeen(album.id)}
                />
              );
            })}
          </div>
        </div>
      </React.Suspense>
    );
  }
}
