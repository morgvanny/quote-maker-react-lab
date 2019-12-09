import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/user";
class Login extends Component {
  state = { username: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login({
      username: e.target.username.value,
      password: e.target.password.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input id="username" />
          <br />
          <label htmlFor="password">Password:</label>{" "}
          <input id="password" type="password" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
