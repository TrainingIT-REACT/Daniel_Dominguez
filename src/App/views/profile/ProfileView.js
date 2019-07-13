import React, { Component } from "react";

import Button from "@material-ui/core/Button";

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cleanHistory() {
    const { cleanHistory } = this.props;
    cleanHistory();
  }

  render() {
    const { albums, songs } = this.props;
    return (
      <React.Suspense fallback="Cargando los albums">
        <div>
          <h1>Profile</h1>
          <Button variant="contained" onClick={() => this.cleanHistory()}>
            Clean history
          </Button>
        </div>
      </React.Suspense>
    );
  }
}
