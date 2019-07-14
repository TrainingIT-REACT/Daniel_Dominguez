import React, { Component } from "react";

import HeaderItem from "./HeaderItem";
import { connect } from "react-redux";
import { logout } from "../redux/actions/user";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        {this.props.user ? "connected" : "disconnected"}
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

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
