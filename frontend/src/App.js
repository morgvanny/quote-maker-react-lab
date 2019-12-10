import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuoteForm from "./components/QuoteForm";
import Quotes from "./containers/Quotes";
import Nav from "./components/Nav";
import Login from "./Login";
import Signup from "./Signup";
class App extends Component {
  render() {
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <QuoteForm />
        <Quotes />
      </div>
    );
  }
}

export default App;
