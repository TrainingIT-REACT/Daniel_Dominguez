import React from "react";

import { NavLink } from "react-router-dom";

const HeaderItem = ({ path, title }) => {
  return (
    <div
      style={{
        height: 50
      }}
    >
      <NavLink exact to={path} activeStyle={styles.active}>
        {title}
      </NavLink>
    </div>
  );
};

const styles = {
  active: {
    fontStyle: "bold"
  }
};

export default HeaderItem;
