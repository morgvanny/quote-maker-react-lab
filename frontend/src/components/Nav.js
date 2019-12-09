import React from "react";
import { NavLink } from "react-router-dom";
const Nav = props => {
  return (
    <div className={`ui inverted menu navbar`}>
      <NavLink className="item" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Nav;
