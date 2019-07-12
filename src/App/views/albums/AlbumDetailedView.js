import React, { Component } from "react";

export default class AlbumDetailedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: null
    };
  }

  render() {
    return (
      <React.Suspense fallback="Cargando detalles del album">
        <div>Album detallado</div>
      </React.Suspense>
    );
  }
}
