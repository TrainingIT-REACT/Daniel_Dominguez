import React, { Component } from "react";

import Song from "../../containers/Song";

export default class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match);
  }

  render() {
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <h1>Esta es tu cancion</h1>
          {JSON.stringify(this.state)}
        </div>
      </React.Suspense>
    );
  }
}
