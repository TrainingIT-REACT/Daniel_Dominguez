import React, { Component } from "react";

export default class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>auth view</div>
      </React.Suspense>
    );
  }
}
