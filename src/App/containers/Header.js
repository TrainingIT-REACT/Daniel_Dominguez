import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };

  render() {
    return (
      <div style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>

        <NavLink to="/albums" activeStyle={this.active}>
          Albums
        </NavLink>

        <NavLink to="/auth" activeStyle={this.active}>
          Login
        </NavLink>

        <NavLink to="/profile" activeStyle={this.active}>
          Profile
        </NavLink>
      </div>
    );
  }
}

export default Header;
