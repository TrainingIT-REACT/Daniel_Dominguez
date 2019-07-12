import React, { Component } from "react";

export default class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>player view</div>
      </React.Suspense>
    );
  }
}
