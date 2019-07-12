import React, { Component } from "react";

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { albums, songs } = this.props;
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>profile</div>
      </React.Suspense>
    );
  }
}
