import React, { Component } from "react";

import HeaderItem from "./HeaderItem";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <HeaderItem path="/" title="Home" />
        <HeaderItem path="/albums" title="Albums" />
        <HeaderItem path="/auth" title="Login" />
        <HeaderItem path="/profile" title="Profile" />
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "red",
    height: 40,
    display: "flex",
    justifyContent: "space-evenly"
  },
  active: {
    fontStyle: "bold"
  }
};

export default Header;
