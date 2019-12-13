import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import QuoteForm from "./components/QuoteForm";
import Quotes from "./containers/Quotes";
import Nav from "./components/Nav";
import Login from "./Login";
import Signup from "./Signup";
import { getProfile } from "./actions/user";
import { connect } from "react-redux";

const OnlyLoggedOutRoute = ({ component: Component, ...rest, profile }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return profile !== null ?
          <Redirect to="/" />
          :
          <Component {...props} />
      }
      }
    />
  )
}

class App extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { profile } = this.props.user
    return (
      <div className="container-fluid">
        <div
          className="row title justify-content-center"
          style={{ paddingTop: "12px" }}
        >
          <h1>Quote Maker</h1>
        </div>
        <Nav />

        <hr />
        <OnlyLoggedOutRoute exact path="/login" profile={profile} component={Login} />
        <OnlyLoggedOutRoute exact path="/signup" profile={profile} component={Signup} />
        {profile ?
          <QuoteForm />
          : null}
        <Quotes />
      </div>
    );
  }
}

export default connect(
  state => {
    return { user: state.user };
  },
  { getProfile }
)(App);
