import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import WelcomePage from "./WelcomePage";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    );
  }
}
