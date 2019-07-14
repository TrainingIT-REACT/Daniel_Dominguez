import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import UserContext from "../../contexts/user";

export default class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername(text) {
    this.setState({
      username: text
    });
  }

  handlePassword(text) {
    this.setState({
      password: text
    });
  }

  onLogin() {
    const { login } = this.props;
    const { username, password } = this.state;
    login(username, password);
  }

  renderLogin() {
    const { location } = this.props;
    return (
      <UserContext.Consumer>
        {({ signedIn, updateUser }) => {
          return (
            <div>
              {signedIn ? (
                <p>Ya puedes ir al panel de administración! 👆</p>
              ) : (
                <>
                  <TextField
                    style={{ width: 300 }}
                    id="outlined-name"
                    label="Username"
                    value={this.state.username}
                    onChange={event => this.handleUsername(event.target.value)}
                    margin="normal"
                    variant="outlined"
                    autoComplete="none"
                  />
                  <TextField
                    style={{ width: 300 }}
                    id="outlined-name"
                    label="Password"
                    value={this.state.password}
                    onChange={event => this.handlePassword(event.target.value)}
                    margin="normal"
                    type="password"
                    variant="outlined"
                  />
                  <Button
                    onClick={() => {
                      this.props.login(
                        this.state.username,
                        this.state.password
                      );
                      updateUser(true);
                    }}
                    style={{ width: 300, marginTop: 10 }}
                    variant="contained"
                    color="primary"
                  >
                    Log in
                  </Button>
                  {location.state && location.state.message && (
                    <p>{location.state.message}</p>
                  )}
                </>
              )}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }

  render() {
    return (
      <React.Suspense fallback="Cargando los albums">
        <div
          style={{
            margin: 50,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ width: 300 }}>{this.renderLogin()}</div>
        </div>
      </React.Suspense>
    );
  }
}
