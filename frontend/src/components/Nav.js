import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/user";
import { connect } from "react-redux";
const Nav = ({ logout }) => {
  const handler = e => {
    e.preventDefault();
    logout();
  };
  return (
    <div className={`ui inverted menu navbar`}>
      <NavLink className="item" to="/login">
        Login
      </NavLink>
      <NavLink className="item" to="/signup">
        Signup
      </NavLink>
      <NavLink onClick={handler} className="item" to="/">
        Logout
      </NavLink>
    </div>
  );
};

export default connect(null, { logout })(Nav);
